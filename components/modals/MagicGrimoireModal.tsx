import React, { useState } from 'react';
import { magicData } from '../../data/magic-data.tsx';
import { LearnedParticle } from '../../types.ts';

interface MagicGrimoireModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddParticles: (particles: Omit<LearnedParticle, 'id'>[]) => void;
}

export const MagicGrimoireModal: React.FC<MagicGrimoireModalProps> = ({ isOpen, onClose, onAddParticles }) => {
    const [selectedParticles, setSelectedParticles] = useState<Record<string, Omit<LearnedParticle, 'id'>>>({});
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null;

    const handleSelectParticle = (particle: Omit<LearnedParticle, 'id'>) => {
        setSelectedParticles(prev => {
            const newSelected = { ...prev };
            const key = `${particle.type}-${particle.name}`;
            if (newSelected[key]) {
                delete newSelected[key];
            } else {
                newSelected[key] = particle;
            }
            return newSelected;
        });
    };

    const handleAdd = () => {
        onAddParticles(Object.values(selectedParticles));
        onClose();
    };
    
    const allParticles = {
        'Funções': magicData.funcoes.map(p => ({ ...p, type: 'Função' })),
        'Objetos': magicData.objetos.map(p => ({ ...p, type: 'Objeto' })),
        'Características': Object.values(magicData.caracteristicas).flat().map(p => ({ ...p, type: 'Característica' })),
        'Complementos': magicData.complementos.map(p => ({ ...p, type: 'Complemento' })),
        'Criadores': magicData.criadores.map(p => ({ ...p, type: 'Criador' })),
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content large" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Grimório de Partículas Arcanas</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>
                <div className="grimoire-body">
                    {Object.entries(allParticles).map(([category, particles]) => (
                        <div key={category} className="grimoire-column">
                            <h4>{category}</h4>
                            <div className="grimoire-list">
                                {particles.map((particle) => {
                                    const pKey = `${particle.type}-${particle.nome}`;
                                    const isSelected = !!selectedParticles[pKey];
                                    return (
                                        <div key={pKey} className={`grimoire-item ${isSelected ? 'selected' : ''}`} onClick={() => handleSelectParticle({ type: particle.type, name: particle.nome, palavra: particle.palavra, description: particle.desc })}>
                                            <h5>{particle.nome} {particle.palavra ? `(${particle.palavra})` : ''}</h5>
                                            <p>{particle.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleAdd} disabled={Object.keys(selectedParticles).length === 0}>
                        Adicionar {Object.keys(selectedParticles).length} Partículas
                    </button>
                </div>
            </div>
        </div>
    );
};