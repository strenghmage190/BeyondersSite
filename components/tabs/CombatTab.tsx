import React from 'react';
import { AgentData, Attack, ToastData, ProtectionItem } from '../../types.ts';
import { initialHabilidadesState } from '../../constants.ts';
import { rollDice, rollDamage } from '../../utils/diceRoller.ts';
import { DiceIcon } from '../icons.tsx';

const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';

interface CombatTabProps {
    agent: AgentData;
    onUpdate: (updatedAgent: AgentData) => void;
    addLiveToast: (toast: Omit<ToastData, 'id'>) => void;
    addLogEntry: (log: Omit<ToastData, 'id'>) => void;
    onOpenAddWeaponModal: () => void;
    onOpenAddProtectionModal: () => void;
    onOpenMagicCreator: () => void;
    onRollRequest: (event: React.MouseEvent, name: string, pool: number, rollType: 'skill' | 'absorption') => void;
    onDirectRoll: (name: string, pool: number) => void;
}

export const CombatTab: React.FC<CombatTabProps> = ({ agent, onUpdate, addLiveToast, addLogEntry, onOpenAddWeaponModal, onOpenAddProtectionModal, onOpenMagicCreator, onRollRequest, onDirectRoll }) => {
    if (!agent || !agent.character) return null;

    const { attacks = [], protections = [], character, attributes, habilidades } = agent;

    const onAttacksChange = (newAttacks: Attack[]) => onUpdate({ ...agent, attacks: newAttacks });
    const onProtectionsChange = (newProtections: ProtectionItem[]) => onUpdate({ ...agent, protections: newProtections });
    const onCharacterChange = (field: keyof AgentData['character'], value: any) => onUpdate({ ...agent, character: { ...character, [field]: value }});

    const handleDeleteAttack = (id: number) => {
        onAttacksChange(attacks.filter(attack => attack.id !== id));
    };

    const handleDeleteProtection = (id: number) => {
        onProtectionsChange(protections.filter(p => p.id !== id));
    };

    const handleEquipProtection = (id: number) => {
        const newProtections = protections.map(p => ({
            ...p,
            isEquipped: p.id === id ? !p.isEquipped : false // Desequipa outros ao equipar um
        }));
        onProtectionsChange(newProtections);
    };
    
    const getAttributeValue = (attrName: string) => {
        if (!attrName) return 0;
        return agent.attributes[attrName.toLowerCase() as keyof typeof agent.attributes] || 0;
    };

    const getSkillValue = (skillName: string) => {
        if (!skillName) return 0;
        const skill = [...(agent.habilidades.gerais || []), ...(agent.habilidades.investigativas || [])].find(s => s.name === skillName);
        return skill ? skill.points : 0;
    };

    const getQualityBonus = (quality: Attack['quality']) => {
        if (quality === 'Superior') return 1;
        if (quality === 'Obra-Prima') return 2;
        return 0;
    };

    const handleRollAttack = (attack: Attack) => {
        const attrValue = getAttributeValue(attack.attribute);
        const skillValue = getSkillValue(attack.skill);
        const qualityBonus = getQualityBonus(attack.quality);
        const secondaryAttrValue = attack.secondaryAttribute ? getAttributeValue(attack.secondaryAttribute) : 0;
    
        const pool = attrValue + skillValue + attack.bonusAttack + qualityBonus + secondaryAttrValue;
        
        const { rolls, successes } = rollDice(pool);
        const damageResult = rollDamage(attack.damageFormula, successes);
    
        let breakdown = `Parada: ${pool} (`;
        const breakdownParts = [];
        if (attack.attribute) breakdownParts.push(`${capitalize(attack.attribute)} ${attrValue}`);
        if (attack.skill && getSkillValue(attack.skill) > 0) breakdownParts.push(`Perícia ${skillValue}`);
        if (attack.bonusAttack > 0) breakdownParts.push(`Bônus ${attack.bonusAttack}`);
        if (qualityBonus > 0) breakdownParts.push(`Qualidade ${qualityBonus}`);
        if (attack.secondaryAttribute) breakdownParts.push(`${capitalize(attack.secondaryAttribute)} ${secondaryAttrValue}`);
        breakdown += breakdownParts.join(' + ') + ')';
    
        const resultType = successes > 0 ? 'success' : 'failure';
        const title = attack.name;
        const message = `${successes} sucesso(s) | Dano: ${damageResult?.total ?? '–'}`;
        const details = `${breakdown}\nRolagem: [${rolls.join(', ')}]\nDano: ${damageResult?.breakdown ?? 'N/A'}`;
    
        addLiveToast({ type: resultType, title, message });
        addLogEntry({ type: resultType, title, message, details });
    };

    const handleFuryUpdate = (value: number) => {
        onCharacterChange('furyPoints', Math.max(0, value));
    };

    const prontidaoSkill = (habilidades.gerais || []).find(s => s.name === 'Prontidão') || { points: 0 };
    const initiativePool = attributes.percepcao + prontidaoSkill.points;

    return (
        <div>
            {/* --- SEÇÃO DE PROTEÇÃO --- */}
            <div className="tab-header">
                <h4 className="section-title">Status de Combate</h4>
                <button onClick={onOpenAddProtectionModal}>+ Adicionar Proteção</button>
            </div>
            <div className="combat-summary-grid">
                <div className="stat-box">
                    <div className="stat-box-header-with-roll">
                        <h4>Parada de Iniciativa Total</h4>
                        <button className="inline-roll-btn" onClick={() => onDirectRoll('Rolagem de Iniciativa', initiativePool)} aria-label="Rolar Iniciativa">
                            <DiceIcon />
                        </button>
                    </div>
                    <p className="calculated-value">{initiativePool} dados</p>
                    <small>(Percepção {attributes.percepcao} + Prontidão {prontidaoSkill.points})</small>
                </div>
                <div className="stat-box">
                    <div className="stat-box-header-with-roll">
                        <h4>Parada de Absorção Total</h4>
                        <button className="inline-roll-btn" onClick={(e) => onRollRequest(e, 'Rolagem de Absorção', character.absorption, 'absorption')} aria-label="Rolar Absorção">
                            <DiceIcon />
                        </button>
                    </div>
                    <p className="calculated-value">{character.absorption} dados</p>
                    <small>(Vigor {agent.attributes.vigor} + Bônus de Armadura)</small>
                </div>
            </div>
            <div className="tab-list">
                {protections.map(p => (
                    <div key={p.id} className={`tab-list-item protection-card ${p.isEquipped ? 'equipped' : ''}`}>
                        <div className="item-header">
                            <h5 className="item-header-title">{p.name}</h5>
                            <button onClick={() => handleDeleteProtection(p.id)}>&times;</button>
                        </div>
                        <div className="protection-details">
                            <span>Bônus de Armadura: +{p.armorBonus}</span>
                            <span>Qualidades: {p.qualities || 'Nenhuma'}</span>
                        </div>
                        <button className="equip-btn" onClick={() => handleEquipProtection(p.id)}>
                            {p.isEquipped ? 'Desequipar' : 'Equipar'}
                        </button>
                    </div>
                ))}
            </div>

            {/* --- RESTORED FURY TRACKER SECTION --- */}
            {agent.character.pathway === 'CAMINHO DO TIRANO' && (
                <div className="pathway-mechanic-section" style={{ marginTop: '2rem' }}>
                    <h4 className="section-title">Fúria da Tempestade</h4>
                    <div className="mechanic-widget">
                        <label>Pontos de Fúria</label>
                        <div className="mechanic-counter">
                            <button onClick={() => handleFuryUpdate((character.furyPoints || 0) - 1)}>-</button>
                            <input
                                type="number"
                                value={character.furyPoints || 0}
                                onChange={e => handleFuryUpdate(Number(e.target.value))}
                            />
                            <button onClick={() => handleFuryUpdate((character.furyPoints || 0) + 1)}>+</button>
                        </div>
                    </div>
                    <div className="mechanic-info" style={{textAlign: 'left', marginTop: '1rem'}}>
                        <p>Ganha 1 Ponto de Fúria para cada 5 de vida perdida. Gaste para adicionar +2 de dano por ponto.</p>
                    </div>
                </div>
            )}


            {/* --- SEÇÃO DE ARSENAL --- */}
            <div className="tab-header" style={{ marginTop: '2rem' }}>
                <h4 className="section-title">Arsenal</h4>
                <div style={{display: 'flex', gap: '0.5rem'}}>
                    <button onClick={onOpenMagicCreator}>+ Criar Magia</button>
                    <button onClick={onOpenAddWeaponModal}>+ Adicionar Arma</button>
                </div>
            </div>
            <div className="tab-list">
                {attacks.map(attack => {
                    const attrValue = getAttributeValue(attack.attribute);
                    const skillValue = getSkillValue(attack.skill);
                    const qualityBonus = getQualityBonus(attack.quality);
                    const secondaryAttrValue = attack.secondaryAttribute ? getAttributeValue(attack.secondaryAttribute) : 0;
                    const attackPool = attrValue + skillValue + attack.bonusAttack + qualityBonus + secondaryAttrValue;
                    
                    return (
                        <div key={attack.id} className="tab-list-item weapon-card">
                            <div className="item-header">
                                <h5 className="item-header-title">{attack.name} <span className="quality-tag">{attack.quality}</span></h5>
                                <button onClick={() => handleDeleteAttack(attack.id)}>&times;</button>
                            </div>
                            <div className="weapon-stats">
                                <div className="stat-block">
                                    <span className="stat-label">Parada de Ataque</span>
                                    <span className="stat-value">{attackPool}</span>
                                </div>
                                <div className="stat-block">
                                    <span className="stat-label">Dano</span>
                                    <span className="stat-value">{attack.damageFormula} + Sucessos</span>
                                </div>
                            </div>
                            <div className="weapon-qualities">
                                <strong>Qualidades:</strong> {attack.specialQualities || 'Nenhuma'}
                            </div>
                            {attack.enhancements && (
                                <div className="weapon-enhancements">
                                    <strong>Aprimoramentos:</strong> {attack.enhancements}
                                </div>
                            )}
                            <button className="roll-attack-btn" onClick={() => handleRollAttack(attack)}>
                                <DiceIcon /> Atacar
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};