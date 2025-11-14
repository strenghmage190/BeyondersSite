import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AgentListPage } from './components/AgentListPage';
import { CharacterSheetPage } from './components/CharacterSheetPage';
import { Header } from './components/Header';
import CampaignsListPage from './components/CampaignsListPage';
import CampaignDashboardPage from './components/CampaignDashboardPage';
import InvitePage from './components/InvitePage';
import { initialAgentData } from './constants';
import { AgentData, ToastData } from './types';
import { LiveToastContainer } from './components/LiveToastContainer';
import { AuthPage } from './components/AuthPage';
import { supabase } from './supabaseClient';
import type { Session } from '@supabase/supabase-js';
import './styles/main.css';

// --- Componente com a Lógica Principal da Aplicação ---
const AppContent = () => {
    const [agents, setAgents] = useState<AgentData[]>([]);
    const [activeAgentId, setActiveAgentId] = useState<number | null>(null);
    const [showCampaigns, setShowCampaigns] = useState(false);
    const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null);

    const [logHistory, setLogHistory] = useState<ToastData[]>([]);
    const [liveToasts, setLiveToasts] = useState<ToastData[]>([]);

    function addLogEntry(logInfo: Omit<ToastData, 'id'>) {
        const newLogEntry = { ...logInfo, id: Date.now() + Math.random() };
        setLogHistory(prev => [newLogEntry, ...prev].slice(0, 15));
    }

    const removeLogEntry = (id: number) => {
        setLogHistory(prev => prev.filter(t => t.id !== id));
    };

    const addLiveToast = (toastInfo: Omit<ToastData, 'id'>) => {
        const newToast = { ...toastInfo, id: Date.now() + Math.random() };
        setLiveToasts(prev => [...prev, newToast]);
        setTimeout(() => {
            removeLiveToast(newToast.id);
        }, 5000);
    };

    function removeLiveToast(id: number) {
        setLiveToasts(prev => prev.filter(t => t.id !== id));
    }


    useEffect(() => {
        async function fetchAgents() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                console.log("Usuário não encontrado, não buscando agentes.");
                setAgents([]); // Limpa os agentes se o usuário deslogar
                return;
            }

            // --- CÓDIGO CORRIGIDO ---
            // 1. Usamos .select() para BUSCAR dados.
            // 2. Pedimos as colunas 'data' e 'id'.
            // 3. Filtramos onde a coluna 'user_id' é igual ao ID do usuário logado.
            const { data, error } = await supabase
                .from('agents')
                .select('data, id')
                .eq('user_id', user.id);
            // --- FIM DA CORREÇÃO ---

            if (error) {
                console.error("Erro ao buscar agentes:", error.message);
            } else if (data) {
                // O resto do seu código para formatar os dados já estava correto!
                const formattedAgents = data.map(item => ({ ...(item.data as AgentData), id: item.id }));
                setAgents(formattedAgents);
            }
        }

        fetchAgents();
    }, []);
useEffect(() => {
        const channel = supabase.channel('agents-channel')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'agents' }, (payload) => {
                if (payload.eventType === 'INSERT') {
                    const newAgent = { ...(payload.new.data as AgentData), id: payload.new.id };
                    setAgents(prev => {
                        if (prev.some(agent => agent.id === newAgent.id)) return prev;
                        return [...prev, newAgent];
                    });
                }
                if (payload.eventType === 'UPDATE') {
                    const updatedAgent = { ...(payload.new.data as AgentData), id: payload.new.id, lastModified: payload.new.lastModified };
                    setAgents(prev => prev.map(agent => agent.id === updatedAgent.id ? updatedAgent : agent));
                }
                if (payload.eventType === 'DELETE') {
                    setAgents(prev => prev.filter(agent => agent.id !== payload.old.id));
                }
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const activeAgent = agents.find(a => a.id === activeAgentId);

    useEffect(() => {
        const useFont = activeAgent?.customization?.useOpenDyslexicFont;
        document.body.classList.toggle('opendyslexic', !!useFont);
        return () => {
            document.body.classList.remove('opendyslexic');
        };
    }, [activeAgent?.customization?.useOpenDyslexicFont]);

    const handleAddAgent = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            alert("Você precisa estar logado para criar um agente!");
            return;
        }

        const newAgentBase = { // CUIDADO: SEM O 'id' AQUI
             ...JSON.parse(JSON.stringify(initialAgentData)),
             lastModified: new Date().toISOString()
        };

        const { data: insertedData, error } = await supabase
            .from('agents')
            .insert({ 
                data: newAgentBase,  // Insere o objeto completo na coluna 'data'
                user_id: user.id     // Associa a ficha ao usuário logado
            })
            .select('data, id')
            .single();
        
        if (error) {
            console.error("Erro ao adicionar agente:", error.message);
        } else if (insertedData) {
            const newAgentFromDB = { ...insertedData.data as AgentData, id: insertedData.id };
            setAgents(prev => [...prev, newAgentFromDB]);
            setActiveAgentId(newAgentFromDB.id);
        }
    };

    const handleSelectAgent = (id: number) => {
        setActiveAgentId(id);
    };

    const handleDeleteAgent = async (id: number) => {
        if (window.confirm("Tem certeza que deseja apagar este agente? Esta ação não pode ser desfeita.")) {
            const { error } = await supabase.from('agents').delete().eq('id', id);
            if (error) {
                console.error(`Erro ao apagar agente ${id}:`, error);
                addLiveToast({ type: 'failure', title: 'Erro de Rede', message: 'Não foi possível apagar o agente.' });
            } else {
                const newAgents = agents.filter(agent => agent.id !== id);
                setAgents(newAgents);
                if (activeAgentId === id) {
                    setActiveAgentId(newAgents.length > 0 ? newAgents[0].id : null);
                }
            }
        }
    };

    const handleUpdateAgent = useCallback(async (updatedAgentData: AgentData) => {
        // Desestrutura o ID para não incluí-lo no objeto JSON
        const { id, ...agentDataToSave } = updatedAgentData;

        // --- CÓDIGO CORRIGIDO ---
        // 1. Adicionamos o 'lastModified' DENTRO do objeto que será salvo na coluna 'data'
        const dataPayload = {
            ...agentDataToSave,
            lastModified: new Date().toISOString()
        };

        // 2. Agora, atualizamos APENAS a coluna 'data' com o payload completo
        const { error } = await supabase
            .from('agents')
            .update({ data: dataPayload }) // Atualiza somente a coluna 'data'
            .eq('id', id);
        // --- FIM DA CORREÇÃO ---

        if (error) {
            console.error(`Erro ao atualizar agente ${id}:`, error);
            addLiveToast({ type: 'failure', title: 'Erro de Rede', message: 'Não foi possível salvar as alterações.' });
        } else {
            // Atualiza o estado local para refletir a mudança imediatamente
            const updatedTimestamp = dataPayload.lastModified;
            const newAgents = agents.map(agent =>
                agent.id === id ? { ...updatedAgentData, lastModified: updatedTimestamp } : agent
            );
            setAgents(newAgents);
        }
    }, [agents, addLiveToast]);

    const handleBackToList = () => {
        setActiveAgentId(null);
    };

    const handleOpenCampaign = (id: string) => {
        console.log('Tentando abrir a campanha com ID:', id);
        if (!id) {
            console.error('ID da campanha é inválido!');
            addLiveToast({ type: 'failure', title: 'Erro', message: 'ID da campanha inválido.' });
            return;
        }
        const targetRoute = `/campaign/${id}`; // diagnostic target
        console.log('Navegando para:', targetRoute);
        // Set the active campaign id so the UI shows the dashboard
        setActiveCampaignId(id);
        setShowCampaigns(false);
        addLiveToast({ type: 'info', title: 'Abrir Campanha', message: `Abrindo campanha ${id}` });
    };

    const handleCloseCampaign = () => {
        setActiveCampaignId(null);
        // optionally show campaigns list again
        setShowCampaigns(true);
    };

    return (
        <div className="app-container">
            <LiveToastContainer toasts={liveToasts} onRemove={removeLiveToast} />
            <Header onShowAgents={() => { setActiveAgentId(null); setShowCampaigns(false); }} onShowCampaigns={() => { setShowCampaigns(true); }} onLogout={async () => {
                await supabase.auth.signOut();
                setAgents([]);
                setActiveAgentId(null);
            }} />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={
                        activeAgent ? (
                            <CharacterSheetPage
                                key={activeAgent.id}
                                agentData={activeAgent}
                                onUpdate={handleUpdateAgent}
                                onBack={handleBackToList}
                                addLiveToast={addLiveToast}
                                addLogEntry={addLogEntry}
                                logHistory={logHistory}
                                onRemoveLogEntry={removeLogEntry}
                            />
                        ) : activeCampaignId ? (
                            <CampaignDashboardPage campaignId={activeCampaignId} />
                        ) : showCampaigns ? (
                            <CampaignsListPage onOpenCampaign={handleOpenCampaign} />
                        ) : (
                            <AgentListPage
                                agents={agents}
                                onSelect={handleSelectAgent}
                                onAdd={handleAddAgent}
                                onDelete={handleDeleteAgent}
                            />
                        )
                    } />
                    <Route path="/campaign/:campaignId" element={<CampaignDashboardPage />} />
                    <Route path="/invite/:inviteCode" element={<InvitePage />} />
                </Routes>
            </main>
        </div>
    );
};

// --- Componente de Autenticação e Roteamento ---
const App = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            if ((data as any)?.subscription) (data as any).subscription.unsubscribe();
        };
    }, []);

    return (
        <BrowserRouter>
            {session ? <AppContent /> : <AuthPage />}
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
