import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { getCampaignById } from '../api/campaigns';
import type { Campaign } from '../types';
import MiniCharacterCard from './MiniCharacterCard';

interface Props {
  campaignId?: string;
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: 12,
  padding: 12
};

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'flex-start'
};

const sidebarStyle: React.CSSProperties = {
  width: 360,
  background: '#0b0b0b',
  border: '1px solid #222',
  borderRadius: 8,
  padding: 12,
  height: 'fit-content'
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px',
  borderBottom: '1px solid #222'
};

const MasterScreenPage: React.FC<Props> = ({ campaignId }) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [hideAgents, setHideAgents] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      let id = campaignId;
      if (!id) {
        // pick first campaign of current user
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setCampaign(null);
          setLoading(false);
          return;
        }
        // fetch campaigns and pick first
        const { getCampaignsByMasterId } = await import('../api/campaigns');
        const list = await getCampaignsByMasterId(user.id);
        if (!list || list.length === 0) {
          setCampaign(null);
          setLoading(false);
          return;
        }
        id = list[0].id;
      }

      const found = await getCampaignById(id!);
      setCampaign(found);

      // load characters for campaign players
      if (found && found.players && found.players.length > 0) {
        const fetched: any[] = [];
        for (const p of found.players) {
          try {
            // attempt to fetch agent by id from supabase agents table
            const agentId = p.agentId;
            if (!agentId) {
              fetched.push({ id: `user_${p.userId}`, character: { name: `Player ${p.userId}` } });
              continue;
            }
            const { data, error } = await supabase.from('agents').select('data, id').eq('id', agentId).single();
            if (error || !data) {
              // fallback placeholder
              fetched.push({ id: agentId, character: { name: `Agent ${agentId}` } });
            } else {
              fetched.push({ id: data.id, ...data });
            }
          } catch (err) {
            fetched.push({ id: p.agentId || p.userId, character: { name: `Unknown` } });
          }
        }
        setCharacters(fetched);
      } else {
        setCharacters([]);
      }

      setLoading(false);
    }
    load();
  }, [campaignId]);

  if (loading) return <div style={{ padding: 12 }}>Carregando Escudo do Mestre...</div>;
  if (!campaign) return <div style={{ padding: 12 }}>Nenhuma campanha encontrada.</div>;

  // define NPCs/agents as entries where player.userId === campaign.gm_id (master)
  const masterId = (campaign as any).gm_id || (campaign as any).masterId || null;

  const visibleCharacters = characters.filter((c, idx) => {
    const player = campaign.players[idx];
    if (!player) return true;
    const isAgentOfMaster = player.userId === masterId;
    if (hideAgents && isAgentOfMaster) return false;
    return true;
  });

  // Initiative tracker state
  const [selectedIds, setSelectedIds] = useState<Record<string | number, boolean>>({});
  const [initiativeOrder, setInitiativeOrder] = useState<Array<{ id: string | number; name: string; initiative: number; status?: string }>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Notes state (per campaign)
  const notesKey = `beyonders_notes_${campaign.id}`;
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    // load notes from localStorage
    try {
      const raw = localStorage.getItem(notesKey) || '';
      setNotes(raw);
    } catch (e) {
      setNotes('');
    }
  }, [notesKey]);

  // debounce save notes
  useEffect(() => {
    const t = setTimeout(() => {
      try { localStorage.setItem(notesKey, notes); } catch (e) { }
    }, 600);
    return () => clearTimeout(t);
  }, [notes, notesKey]);

  // load saved initiative (if any)
  useEffect(() => {
    const key = `beyonders_initiative_${campaign.id}`;
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        setInitiativeOrder(parsed.order || []);
        setActiveIndex(parsed.activeIndex || 0);
      }
    } catch (e) { }
  }, [campaign.id]);

  const saveInitiativeState = (order: any[], active: number) => {
    const key = `beyonders_initiative_${campaign.id}`;
    try { localStorage.setItem(key, JSON.stringify({ order, activeIndex: active })); } catch (e) { }
  };

  const toggleSelect = (id: string | number) => {
    setSelectedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const rollInitiatives = () => {
    const participants = visibleCharacters.filter(ch => selectedIds[ch.id]);
    const rolled = participants.map(ch => {
      const base = (ch.data?.character?.initiative) ?? (ch.character?.initiative) ?? 0;
      const roll = Math.floor(Math.random() * 20) + 1;
      const total = roll + base;
      const name = (ch.data?.character?.name) ?? (ch.character?.name) ?? `#${ch.id}`;
      return { id: ch.id, name, initiative: total, status: '' };
    });
    rolled.sort((a, b) => b.initiative - a.initiative);
    setInitiativeOrder(rolled);
    setActiveIndex(0);
    saveInitiativeState(rolled, 0);
  };

  const nextTurn = () => {
    setActiveIndex(i => {
      const next = Math.min((initiativeOrder.length - 1), i + 1);
      saveInitiativeState(initiativeOrder, next);
      return next;
    });
  };

  const prevTurn = () => {
    setActiveIndex(i => {
      const prev = Math.max(0, i - 1);
      saveInitiativeState(initiativeOrder, prev);
      return prev;
    });
  };

  const updateAgentCharacter = async (agentId: string | number, updatedCharacter: any) => {
    // update local state immediately
    setCharacters(prev => prev.map(ch => {
      if (ch.id === agentId) {
        const copy = { ...ch };
        if (copy.data) {
          copy.data = { ...(copy.data), character: updatedCharacter };
        } else {
          copy.character = updatedCharacter;
        }
        return copy;
      }
      return ch;
    }));

    // persist to Supabase if this row has a 'data' object (real agent)
    const existing = characters.find(c => c.id === agentId);
    if (existing && existing.data) {
      const updatedData = { ...(existing.data), character: updatedCharacter };
      try {
        const { error } = await supabase.from('agents').update({ data: updatedData }).eq('id', agentId as any);
        if (error) console.error('Failed to persist agent update', error);
      } catch (e) {
        console.error('Error updating agent in supabase', e);
      }
    }
  };

  return (
    <div>
      <header style={headerStyle}>
        <div>
          <h2 style={{ margin: 0 }}>{campaign.name}</h2>
          <div style={{ fontSize: 12, color: '#999' }}>Escudo do Mestre</div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <label style={{ fontSize: 13 }}>
            <input type="checkbox" checked={hideAgents} onChange={() => setHideAgents(v => !v)} />{' '}
            Ocultar agentes para jogadores
          </label>
        </div>
      </header>

      <main style={layoutStyle}>
        <section style={{ flex: 1 }}>
          <div style={{ marginBottom: 8, padding: '0 12px' }}>
            <div style={{ fontSize: 13, color: '#bbb' }}>Selecione participantes para combate:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {visibleCharacters.map(ch => {
                const name = (ch.data?.character?.name) ?? (ch.character?.name) ?? `#${ch.id}`;
                return (
                  <label key={ch.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0b0b0b', padding: '6px 8px', borderRadius: 6, border: '1px solid #222' }}>
                    <input type="checkbox" checked={!!selectedIds[ch.id]} onChange={() => toggleSelect(ch.id)} />
                    <span style={{ fontSize: 13 }}>{name}</span>
                  </label>
                );
              })}
            </div>
            <div style={{ marginTop: 10 }}>
              <button onClick={rollInitiatives} style={{ marginRight: 8 }}>Rolar Iniciativas!</button>
              <button onClick={() => { setInitiativeOrder([]); setActiveIndex(0); saveInitiativeState([], 0); }}>Limpar</button>
            </div>
          </div>

          <section style={gridStyle}>
            {visibleCharacters.length === 0 ? (
              <div style={{ padding: 12 }}>Nenhum personagem disponível.</div>
            ) : (
              visibleCharacters.map(ch => (
                <MiniCharacterCard key={ch.id} agent={ch} onOpen={() => alert(`Abrir ficha ${ch.id}`)} onUpdateAgent={updateAgentCharacter} />
              ))
            )}
          </section>
        </section>

        <aside style={sidebarStyle}>
          <h3 style={{ marginTop: 0 }}>Ordem de Combate</h3>
          {initiativeOrder.length === 0 ? (
            <div style={{ color: '#999', marginBottom: 8 }}>Nenhuma iniciativa rolada.</div>
          ) : (
            <div>
              <ol style={{ paddingLeft: 18 }}>
                {initiativeOrder.map((p, idx) => (
                  <li key={p.id} style={{ marginBottom: 6, background: idx === activeIndex ? '#122' : 'transparent', padding: '6px', borderRadius: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <div style={{ fontWeight: 700 }}>{p.name}</div>
                      <div style={{ color: '#ddd' }}>{p.initiative}</div>
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>{p.status || ''}</div>
                  </li>
                ))}
              </ol>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button onClick={prevTurn}>Turno Anterior</button>
                <button onClick={nextTurn}>Próximo Turno</button>
              </div>
            </div>
          )}

          <hr style={{ borderColor: '#222', margin: '12px 0' }} />

          <h3 style={{ marginTop: 0 }}>Anotações do Mestre</h3>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anotações rápidas..." style={{ width: '100%', minHeight: 160, background: '#071017', color: '#ddd', border: '1px solid #222', borderRadius: 6, padding: 8 }} />
        </aside>
      </main>
    </div>
  );
};

export default MasterScreenPage;
