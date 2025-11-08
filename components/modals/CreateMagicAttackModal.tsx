import React, { useState, useEffect } from 'react';
import { AgentData, Attack, LearnedParticle, Attributes } from '../../types.ts';
import { magicData } from '../../data/magic-data.tsx';

interface CreateMagicAttackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddAttack: (attack: Attack) => void;
    agent: AgentData;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const CreateMagicAttackModal: React.FC<CreateMagicAttackModalProps> = ({ isOpen, onClose, onAddAttack, agent }) => {
    const [selectedFuncao, setSelectedFuncao] = useState<LearnedParticle | null>(null);
    const [selectedObjeto, setSelectedObjeto] = useState<LearnedParticle | null>(null);
    const [selectedCaracteristica, setSelectedCaracteristica] = useState<LearnedParticle | null>(null);
    
    // New state for demigod attribute selection
    const [selectedRelevantAttribute, setSelectedRelevantAttribute] = useState<keyof Attributes>('espiritualidade');

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setSelectedFuncao(null);
            setSelectedObjeto(null);
            setSelectedCaracteristica(null);
            setSelectedRelevantAttribute('espiritualidade');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const { character, attributes, learnedParticles = [] } = agent;
    const isDemigod = character.sequence <= 4;

    const funcoes = learnedParticles.filter(p => p.type === 'Função');
    const objetos = learnedParticles.filter(p => p.type === 'Objeto');
    const caracteristicas = learnedParticles.filter(p => p.type === 'Característica');

    const getDamageDie = () => {
        if (!selectedCaracteristica) return 'd4';
        const characteristicData = Object.values(magicData.caracteristicas)
            .flat()
            .find(c => c.nome === selectedCaracteristica.name);
        return characteristicData?.die || 'd6';
    };

    const handleCreateAttack = () => {
        if (!selectedFuncao || !selectedObjeto) {
            alert('Selecione ao menos uma Função e um Objeto.');
            return;
        }

        const nameParts = [
            selectedFuncao.palavra || selectedFuncao.name,
            selectedCaracteristica ? (selectedCaracteristica.palavra || selectedCaracteristica.name) : null,
            selectedObjeto.palavra || selectedObjeto.name
        ];
        const name = nameParts.filter(Boolean).join(' ');
        
        let newAttack: Attack;

        if (isDemigod) {
            // Tecelagem Arcana
            newAttack = {
                id: Date.now(),
                name: name,
                damageFormula: `Espiritualidade + ${getDamageDie()}`,
                quality: 'Comum',
                specialQualities: `Mágico, Tecelagem Arcana, ${selectedCaracteristica?.name || 'Arcano'}`,
                enhancements: '',
                skill: 'Tecelagem Arcana', // Skill is not used for dice pool, just for flavor
                attribute: 'espiritualidade',
                secondaryAttribute: selectedRelevantAttribute, // Store the dynamic attribute name
                bonusAttack: 0, // Bonus is now dynamic
                range: '30m',
                ammo: 0,
                maxAmmo: 0,
            };
        } else {
            // Inscrição Arcana
            newAttack = {
                id: Date.now(),
                name: name,
                damageFormula: `Inteligência + ${getDamageDie()}`,
                quality: 'Comum',
                specialQualities: `Mágico, Inscrição (Ritual), ${selectedCaracteristica?.name || 'Arcano'}`,
                enhancements: '',
                skill: 'Ocultismo (Híbrida)',
                attribute: 'inteligencia',
                bonusAttack: 0,
                range: '30m',
                ammo: 0,
                maxAmmo: 0,
            };
        }
        
        onAddAttack(newAttack);
        onClose();
    };

    const renderSelector = (title: string, items: LearnedParticle[], selected: LearnedParticle | null, setter: (item: LearnedParticle | null) => void) => (
        <div className="magic-creator-column">
            <h4>{title}</h4>
            <div className="particle-selector">
                {items.map(item => (
                    <button 
                        key={item.id} 
                        className={`particle-btn ${selected?.id === item.id ? 'active' : ''}`}
                        onClick={() => setter(item.id === selected?.id ? null : item)}
                        title={item.description}
                    >
                        {item.name} {item.palavra ? `(${item.palavra})` : ''}
                    </button>
                ))}
            </div>
        </div>
    );
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content large" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Criar Ataque Mágico</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>

                <div className="magic-creator-grid">
                    {renderSelector('1. Função', funcoes, selectedFuncao, setSelectedFuncao)}
                    {renderSelector('2. Objeto', objetos, selectedObjeto, setSelectedObjeto)}
                    {renderSelector('3. Característica (Opcional)', caracteristicas, selectedCaracteristica, setSelectedCaracteristica)}
                </div>

                <div className="magic-method-summary">
                    {isDemigod ? (
                        <>
                            <h4>Método de Conjuração: Tecelagem Arcana (Ação Instantânea)</h4>
                            <p>Teste de Ativação: Espiritualidade + {capitalize(selectedRelevantAttribute)}</p>
                            <div className="form-group">
                                <label htmlFor="relevant-attribute-select">Atributo Relevante:</label>
                                <select 
                                    id="relevant-attribute-select" 
                                    value={selectedRelevantAttribute}
                                    onChange={e => setSelectedRelevantAttribute(e.target.value as keyof Attributes)}
                                >
                                    {Object.keys(attributes).map(attr => (
                                        <option key={attr} value={attr}>{capitalize(attr)}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            <h4>Método de Conjuração: Inscrição Arcana (Ritual)</h4>
                            <p>Teste de Ativação: Inteligência + Ocultismo</p>
                        </>
                    )}
                </div>

                <div className="modal-footer">
                    <button onClick={handleCreateAttack} disabled={!selectedFuncao || !selectedObjeto}>
                        Criar Ataque
                    </button>
                </div>
            </div>
        </div>
    );
};