import React, { useMemo, useState, useRef } from 'react';
import { BeyonderAbility, PathwayData, Character, InfernalAspect } from '../../types.ts';

interface BeyonderTabProps {
    abilities: BeyonderAbility[];
    onAbilitiesChange: (newAbilities: BeyonderAbility[]) => void;
    pathwayData: PathwayData | undefined;
    sequence: number;
    character: Character;
    onCharacterChange: (field: keyof Character, value: any) => void;
}

export const BeyonderTab: React.FC<BeyonderTabProps> = ({ abilities = [], onAbilitiesChange, pathwayData, sequence, character, onCharacterChange }) => {
    const [openMainSection, setOpenMainSection] = useState<string | null>(null);
    const [openAbilitySequence, setOpenAbilitySequence] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('todas');
    
    // State for Abismo pathway mechanic
    const [isAddingAspect, setIsAddingAspect] = useState(false);
    const [selectedNewAspectName, setSelectedNewAspectName] = useState<string>('');


    const refs = {
        domain: useRef<HTMLDivElement>(null),
        mecanica: useRef<HTMLDivElement>(null),
        inatos: useRef<HTMLDivElement>(null),
        mitica: useRef<HTMLDivElement>(null),
        adquiridas: useRef<HTMLDivElement>(null),
    };

    const toggleMainSection = (sectionName: string) => {
        const newOpenSection = openMainSection === sectionName ? null : sectionName;
        setOpenMainSection(newOpenSection);
        setActiveFilter(newOpenSection || 'todas');
    };

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        if (filter === 'todas') {
            setOpenMainSection(null);
        } else {
            setOpenMainSection(filter);
            setTimeout(() => {
                refs[filter as keyof typeof refs]?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 100);
        }
    };

    const toggleAbilitySequence = (seqName: string) => {
        setOpenAbilitySequence(prev => (prev === seqName ? null : seqName));
    };
    
    const mecanicaUnica = pathwayData?.mecanicaUnica;
    const poderesInatos = useMemo(() => {
        if (!pathwayData?.poderesInatos) return [];
        return pathwayData.poderesInatos
            .filter(p => {
                const seqNum = parseInt(p.seq.match(/\d+/)?.[0] ?? '99');
                return seqNum >= sequence;
            })
            .sort((a, b) => (parseInt(b.seq.match(/\d+/)?.[0] ?? '0')) - (parseInt(a.seq.match(/\d+/)?.[0] ?? '0')));
    }, [pathwayData, sequence]);
    const formaMitica = pathwayData?.formaMitica;
    const domain = pathwayData?.domain;

    const handleAbilityChange = (id: number, field: keyof BeyonderAbility, value: any) => {
        const newAbilities = abilities.map(ability =>
            ability.id === id ? { ...ability, [field]: value } : ability
        );
        onAbilitiesChange(newAbilities);
    };

    const handleDeleteAbility = (id: number) => {
        onAbilitiesChange(abilities.filter(ability => ability.id !== id));
    };

    const groupedAbilities = abilities.reduce((acc, ability) => {
        const key = ability.seqName || 'Habilidades Únicas';
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(ability);
        return acc;
    }, {} as Record<string, BeyonderAbility[]>);

    const sequenceOrder = useMemo(() => {
        if (!pathwayData) return [];
        return Object.keys(pathwayData.sequences).sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)?.[0] ?? '99');
            const numB = parseInt(b.match(/\d+/)?.[0] ?? '99');
            return numB - numA; // Sort descending from 9 to 1
        });
    }, [pathwayData]);
    
    // --- Abismo Pathway Logic ---
    const allPossibleAspects = useMemo(() => pathwayData?.mecanicaUnica?.items || [], [pathwayData]);
    const learnedAspectNames = useMemo(() => new Set((character.infernalAspects || []).map(a => a.name)), [character.infernalAspects]);
    const availableAspectsToAdd = useMemo(() => allPossibleAspects.filter(item => !learnedAspectNames.has(item.nome)), [allPossibleAspects, learnedAspectNames]);
    const liberatedCount = useMemo(() => (character.infernalAspects || []).filter(a => a.isLiberated).length, [character.infernalAspects]);

    const handleAddAspect = () => {
        if (!selectedNewAspectName || !pathwayData?.mecanicaUnica) return;
        const aspectData = pathwayData.mecanicaUnica.items.find(item => item.nome === selectedNewAspectName);
        if (!aspectData) return;

        const newAspect: InfernalAspect = {
            id: Date.now() + Math.random(),
            name: aspectData.nome,
            description: aspectData.desc,
            isLiberated: false,
        };
        onCharacterChange('infernalAspects', [...(character.infernalAspects || []), newAspect]);
        setIsAddingAspect(false);
        setSelectedNewAspectName('');
    };

    const handleToggleAspect = (aspectId: number) => {
        const updatedAspects = (character.infernalAspects || []).map(aspect =>
            aspect.id === aspectId ? { ...aspect, isLiberated: !aspect.isLiberated } : aspect
        );
        onCharacterChange('infernalAspects', updatedAspects);
    };

    const handleDeleteAspect = (aspectId: number) => {
        onCharacterChange('infernalAspects', (character.infernalAspects || []).filter(a => a.id !== aspectId));
    };


    const filters = [
        { key: 'todas', label: 'Todas' },
        { key: 'domain', label: 'Domínio', condition: !!domain },
        { key: 'mecanica', label: 'Mecânica Única', condition: !!mecanicaUnica },
        { key: 'inatos', label: 'Poderes Inatos', condition: poderesInatos.length > 0 },
        { key: 'mitica', label: 'Forma Mítica', condition: formaMitica && sequence <= 4 },
        { key: 'adquiridas', label: 'Habilidades Compráveis', condition: true },
    ];

    return (
        <div>
            {pathwayData?.pathway === 'CAMINHO DO ACORRENTADO' && (
                <div className="pathway-mechanic-section">
                    <h3 className="section-title">A Prisão da Carne</h3>
                    <div className="form-group">
                        <label>Maldição Atual:</label>
                        <textarea
                            value={character.currentCurse || ''}
                            onChange={e => onCharacterChange('currentCurse', e.target.value)}
                            placeholder="Anote a maldição da sua sequência aqui..."
                            rows={3}
                        />
                    </div>
                    <div className="mechanic-widget">
                        <label>Pontos de Bestialidade (PB)</label>
                        <div className="mechanic-counter">
                            <button onClick={() => onCharacterChange('bestialityPoints', Math.max(0, (character.bestialityPoints || 0) - 1))}>-</button>
                            <input
                                type="number"
                                value={character.bestialityPoints || 0}
                                onChange={e => onCharacterChange('bestialityPoints', Number(e.target.value))}
                            />
                            <button onClick={() => onCharacterChange('bestialityPoints', (character.bestialityPoints || 0) + 1)}>+</button>
                        </div>
                    </div>
                    <div className="mechanic-info">
                        Dificuldade para resistir ao frenesi: +{Math.floor((character.bestialityPoints || 0) / 5)}
                    </div>
                </div>
            )}

            {pathwayData?.pathway === 'CAMINHO DO ABISMO' && (
                <div className="pathway-mechanic-section">
                    <h3 className="section-title">Aspectos Infernais</h3>
                     <div className="mechanic-widget">
                        <label>Aspectos Libertos: {liberatedCount}</label>
                    </div>
                    <div className="mechanic-info" style={{textAlign: 'left', marginTop: 0, marginBottom: '1rem'}}>
                        Cada Aspecto Liberto aumenta em 1 a dificuldade para resistir a impulsos pecaminosos.
                    </div>

                    <div className="aspect-list">
                        {(character.infernalAspects || []).map(aspect => (
                            <div key={aspect.id} className="aspect-item">
                                <div className="item-header">
                                    <h5 className="item-header-title">{aspect.name}</h5>
                                    <button onClick={() => handleDeleteAspect(aspect.id)}>&times;</button>
                                </div>
                                <p className="item-description">{aspect.description}</p>
                                <div className="aspect-item-controls">
                                    <label className="toggle-switch">
                                        <input type="checkbox" checked={aspect.isLiberated} onChange={() => handleToggleAspect(aspect.id)} />
                                        <span className="slider"></span>
                                    </label>
                                    <span>Liberto</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isAddingAspect ? (
                        <div className="add-aspect-controls">
                            <select value={selectedNewAspectName} onChange={e => setSelectedNewAspectName(e.target.value)}>
                                <option value="" disabled>Selecione um Aspecto...</option>
                                {availableAspectsToAdd.map(item => <option key={item.nome} value={item.nome}>{item.nome}</option>)}
                            </select>
                            <button onClick={handleAddAspect} disabled={!selectedNewAspectName}>Confirmar</button>
                            <button onClick={() => setIsAddingAspect(false)} className="cancel-btn">Cancelar</button>
                        </div>
                    ) : (
                         <button onClick={() => setIsAddingAspect(true)} style={{width: '100%', marginTop: '1rem'}}>+ Adicionar Aspecto</button>
                    )}
                </div>
            )}


            <div className="beyonder-filter-bar">
                {filters.map(f => f.condition && (
                    <button
                        key={f.key}
                        className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                        onClick={() => handleFilterClick(f.key)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {domain && (
                <div ref={refs.domain} className={`accordion-section ${openMainSection === 'domain' ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleMainSection('domain')}>
                        <h4>Domínio: {pathwayData?.pathway}</h4>
                        <span className="accordion-icon"></span>
                    </div>
                    <div className="accordion-content">
                        <p className="domain-description item-description">{domain.description}</p>
                        {domain.particulas.map(particle => (
                            <div key={particle.name} className="domain-particle-item" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem' }}>
                                <h5>{particle.name} ({particle.translation}) <span style={{ fontSize: '0.8rem', color: 'var(--secondary-text-color)', fontWeight: 'normal' }}>[{particle.type}]</span></h5>
                                <p><strong>Conceito:</strong> {particle.conceito}</p>
                                {particle.exemplo && <p><strong>Exemplo:</strong> {particle.exemplo}</p>}
                                {particle.uso && <p><strong>Uso:</strong> {particle.uso}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {mecanicaUnica && pathwayData?.pathway !== 'CAMINHO DO ABISMO' && (
                <div ref={refs.mecanica} className={`accordion-section ${openMainSection === 'mecanica' ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleMainSection('mecanica')}>
                        <h4>Mecânica Única: {mecanicaUnica.titulo}</h4>
                        <span className="accordion-icon"></span>
                    </div>
                    <div className="accordion-content">
                        {mecanicaUnica.items.map(item => (
                            <div key={item.nome} className="domain-particle-item">
                                <h5>{item.nome}</h5>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {poderesInatos.length > 0 && (
                <div ref={refs.inatos} className={`accordion-section ${openMainSection === 'inatos' ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleMainSection('inatos')}>
                        <h4>Poderes Inatos (Ganhos Automaticamente)</h4>
                        <span className="accordion-icon"></span>
                    </div>
                    <div className="accordion-content">
                        {poderesInatos.map(poder => (
                            <div key={poder.nome} className="domain-particle-item">
                                <h5>Seq. {poder.seq}: {poder.nome}</h5>
                                <p>{poder.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {formaMitica && sequence <= 4 && (
                 <div ref={refs.mitica} className={`accordion-section ${openMainSection === 'mitica' ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleMainSection('mitica')}>
                        <h4>Forma Mítica: {formaMitica.nome}</h4>
                        <span className="accordion-icon"></span>
                    </div>
                    <div className="accordion-content">
                        <p className="item-description">{formaMitica.disponivel}</p>
                        <div className="domain-particle-item">
                            <h5>Ativação</h5> <p>{formaMitica.ativacao}</p>
                        </div>
                        <div className="domain-particle-item">
                            <h5>Descrição</h5> <p>{formaMitica.descricao}</p>
                        </div>
                        <div className="domain-particle-item">
                            <h5>Bônus</h5> <p>{formaMitica.bonus}</p>
                        </div>
                         <div className="domain-particle-item">
                            <h5>Poderes</h5>
                            {formaMitica.poderes.map(poder => (
                                <p key={poder.nome} style={{marginTop: '0.5rem'}}><strong>{poder.tipo} ({poder.nome}):</strong> {poder.desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div ref={refs.adquiridas} className={`accordion-section ${openMainSection === 'adquiridas' ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleMainSection('adquiridas')}>
                    <h4>Habilidades Adquiridas</h4>
                    <span className="accordion-icon"></span>
                </div>
                <div className="accordion-content">
                    {Object.keys(groupedAbilities).length > 0 ? (
                        sequenceOrder.map(seqName => {
                            const abilityList = groupedAbilities[seqName];
                            if (!abilityList || abilityList.length === 0) return null;

                            return (
                                <div key={seqName} className={`accordion-section ${openAbilitySequence === seqName ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleAbilitySequence(seqName)}>
                                        <h5>{seqName}</h5>
                                        <span className="accordion-icon"></span>
                                    </div>
                                    <div className="accordion-content">
                                        <div className="tab-list">
                                            {(abilityList as BeyonderAbility[]).map(ability => (
                                                <div key={ability.id} className="tab-list-item">
                                                    <div className="item-header">
                                                        <div className="item-header-title">
                                                            <input type="text" value={ability.name} onChange={e => handleAbilityChange(ability.id, 'name', e.target.value)} />
                                                            {ability.acquisitionMethod && (<span className={`acquisition-tag ${ability.acquisitionMethod}`}>{ability.acquisitionMethod === 'free' ? 'Gratuita' : 'Comprada'}</span>)}
                                                        </div>
                                                        <div className="item-header-controls"><button onClick={() => handleDeleteAbility(ability.id)}>&times;</button></div>
                                                    </div>
                                                    <textarea value={ability.description} onChange={e => handleAbilityChange(ability.id, 'description', e.target.value)} placeholder="Descrição da habilidade..." />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p style={{ padding: '0 1rem' }}>Nenhuma habilidade adquirida ainda. Use o botão "Gastar PA" para comprar novas habilidades.</p>
                    )}
                </div>
            </div>
        </div>
    );
};