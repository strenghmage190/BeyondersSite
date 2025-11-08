import React, { useState } from 'react';
import { Ritual, LearnedParticle, AgentData, ToastData } from '../../types.ts';

// --- Modal Component Definition ---
interface ArcaneDeconstructionModalProps {
    isOpen: boolean;
    onClose: () => void;
    agent: AgentData;
    onUpdate: (updatedAgent: AgentData) => void;
    addLogEntry: (log: Omit<ToastData, 'id'>) => void;
}

const ArcaneDeconstructionModal: React.FC<ArcaneDeconstructionModalProps> = ({ isOpen, onClose, agent, onUpdate, addLogEntry }) => {
    const [selectedAbilityId, setSelectedAbilityId] = useState<string>('');
    const [newParticleName, setNewParticleName] = useState('');

    const COST = 50;
    // FIX: Property 'paAtual' does not exist on type 'Character'. Use 'paDisponivel' instead.
    const canAfford = agent.character.paDisponivel >= COST;

    const handleConfirm = () => {
        if (!canAfford || !selectedAbilityId || !newParticleName.trim()) {
            return;
        }

        const newParticle: LearnedParticle = {
            id: Date.now() + Math.random(),
            type: 'Descoberta',
            name: newParticleName.trim(),
            description: `Partícula descoberta através da desconstrução da habilidade: ${agent.habilidadesBeyonder.find(h => h.id === Number(selectedAbilityId))?.name || 'Desconhecida'}.`,
            isDomain: false,
        };

        const updatedAgent: AgentData = {
            ...agent,
            character: {
                ...agent.character,
                paDisponivel: agent.character.paDisponivel - COST,
                paTotalGasto: agent.character.paTotalGasto + COST,
            },
            learnedParticles: [...agent.learnedParticles, newParticle],
        };

        onUpdate(updatedAgent);
        
        addLogEntry({
            type: 'info',
            title: 'Desconstrução Arcana',
            message: `Você aprendeu a Partícula: ${newParticle.name}.`,
            details: `Gastou ${COST} PA para desconstruir uma habilidade.`,
        });

        onClose();
    };
    
    // Reset state when modal opens
    useState(() => {
        if (isOpen) {
            setSelectedAbilityId('');
            setNewParticleName('');
        }
    });

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Desconstrução Arcana</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>
                <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>Este processo requer intensa meditação e um profundo entendimento do seu poder. Você gastará 50 Pontos de Atuação para desconstruir uma habilidade e revelar sua Partícula Mágica fundamental.</p>
                    
                    <div className="form-group">
                        <label htmlFor="skill-to-deconstruct-select">Habilidade a Desconstruir:</label>
                        <select 
                            id="skill-to-deconstruct-select"
                            value={selectedAbilityId}
                            onChange={(e) => setSelectedAbilityId(e.target.value)}
                        >
                            <option value="" disabled>Selecione uma habilidade...</option>
                            {agent.habilidadesBeyonder.map(ability => (
                                <option key={ability.id} value={ability.id.toString()}>
                                    {ability.name} ({ability.seqName || 'Única'})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="revealed-particle-input">Partícula Revelada:</label>
                        <input 
                            id="revealed-particle-input"
                            type="text"
                            value={newParticleName}
                            onChange={(e) => setNewParticleName(e.target.value)}
                            placeholder="Ex: Neurospasta (Objeto)"
                        />
                    </div>

                    <div>
                        <strong>Custo:</strong> {COST} PA
                        {!canAfford && <p style={{ color: 'var(--error-color)', marginTop: '0.5rem' }}>PA insuficiente.</p>}
                    </div>

                </div>
                <div className="modal-footer">
                    <button onClick={onClose} style={{ background: 'transparent', border: '1px solid var(--secondary-text-color)', color: 'var(--secondary-text-color)' }}>Cancelar</button>
                    <button 
                        id="confirm-deconstruction-btn"
                        onClick={handleConfirm}
                        disabled={!canAfford || !selectedAbilityId || !newParticleName.trim()}
                    >
                        Confirmar e Aprender
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Main Tab Component ---
interface MagicTabProps {
    agent: AgentData;
    onUpdate: (updatedAgent: AgentData) => void;
    onOpenMagicGrimoire: () => void;
    addLogEntry: (log: Omit<ToastData, 'id'>) => void;
}

export const MagicTab: React.FC<MagicTabProps> = ({
    agent, onUpdate, onOpenMagicGrimoire, addLogEntry
}) => {
    const [isDeconstructionModalOpen, setIsDeconstructionModalOpen] = useState(false);
    // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
    const { rituais = [], learnedParticles = [], character } = agent;

    const handleRitualChange = (id: number, field: keyof Ritual, value: any) => {
        // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
        const newRituals = rituais.map(r => r.id === id ? { ...r, [field]: value } : r);
        // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
        onUpdate({ ...agent, rituais: newRituals });
    };

    const handleAddRitual = () => {
        const newRitual: Ritual = { id: Date.now(), name: 'Novo Ritual', description: '' };
        // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
        onUpdate({ ...agent, rituais: [...rituais, newRitual] });
    };

    const handleDeleteRitual = (id: number) => {
        // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
        const newRituals = rituais.filter(r => r.id !== id);
        // FIX: Renamed 'rituals' to 'rituais' to match the AgentData type.
        onUpdate({ ...agent, rituais: newRituals });
    };
    
    const handleDeleteParticle = (id: number) => {
        const newParticles = learnedParticles.filter(p => p.id !== id);
        onUpdate({ ...agent, learnedParticles: newParticles });
    };

    return (
        <div>
            <div className="magic-section">
                <div className="tab-header">
                    <h4>Rituais & Feitiçaria</h4>
                    <button onClick={handleAddRitual}>+ Novo Ritual</button>
                </div>
                 {/* FIX: Renamed 'rituals' to 'rituais' to match the AgentData type. */}
                 {rituais.map(ritual => (
                    <div key={ritual.id} className="tab-list-item">
                        <div className="item-header">
                            <input type="text" value={ritual.name} onChange={e => handleRitualChange(ritual.id, 'name', e.target.value)} />
                            <button onClick={() => handleDeleteRitual(ritual.id)}>&times;</button>
                        </div>
                        <textarea value={ritual.description} onChange={e => handleRitualChange(ritual.id, 'description', e.target.value)} placeholder="Descrição do ritual..."></textarea>
                    </div>
                ))}
            </div>

            <div className="magic-section">
                <div className="tab-header">
                    <h4>Partículas Arcanas Aprendidas</h4>
                    <div className="tab-header-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
                         {character.sequence <= 4 && (
                            <button onClick={() => setIsDeconstructionModalOpen(true)}>Desconstrução Arcana</button>
                         )}
                        <button className="add-from-grimoire-btn" onClick={onOpenMagicGrimoire}>Adicionar do Grimório</button>
                    </div>
                </div>
                <div className="particle-list">
                    {learnedParticles.map(particle => (
                        <div key={particle.id} className={`particle-item ${particle.isDomain ? 'domain' : ''}`} title={particle.description}>
                            <span>{particle.name} {particle.palavra ? `(${particle.palavra})` : ''}</span>
                            <button onClick={() => handleDeleteParticle(particle.id)} disabled={particle.isDomain}>&times;</button>
                        </div>
                    ))}
                </div>
            </div>

            {isDeconstructionModalOpen && <ArcaneDeconstructionModal 
                isOpen={isDeconstructionModalOpen}
                onClose={() => setIsDeconstructionModalOpen(false)}
                agent={agent}
                onUpdate={onUpdate}
                addLogEntry={addLogEntry}
            />}
        </div>
    );
};