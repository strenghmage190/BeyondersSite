import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ToastData, AgentData, Character, Habilidade, Attributes, MythicalFormStage, PathwayData, ProtectionItem } from '../types.ts';
import { StatusBar } from './StatusBar.tsx';
import { SanityTracker } from './SanityTracker.tsx';
import { AttributesSection } from './AttributesSection.tsx';
import { CombatTab } from './tabs/CombatTab.tsx';
import { BeyonderTab } from './tabs/BeyonderTab.tsx';
import { MagicTab } from './tabs/MagicTab.tsx';
import { InventoryTab } from './tabs/InventoryTab.tsx';
import { NotesTab } from './tabs/NotesTab.tsx';
import { AntecedentesTab } from './tabs/AntecedentesTab.tsx';
import { MagicGrimoireModal } from './modals/MagicGrimoireModal.tsx';
import { ImprovementModal } from './modals/ImprovementModal.tsx';
import { CreateMagicAttackModal } from './modals/CreateMagicAttackModal.tsx';
import { AddWeaponModal } from './modals/AddAttackModal.tsx';
import { AddProtectionModal } from './modals/AddBeyonderAbilityModal.tsx';
import { CustomizationModal } from './modals/CustomizationModal.tsx';
import { DiceRollerModal } from './modals/DiceRollerModal.tsx';
import { MythicalFormModal } from './modals/MythicalFormModal.tsx';
import { caminhosData } from '../data/beyonders-data.tsx';
import { DiceIcon, PaletteIcon, FlameIcon } from './icons.tsx';
import { rollDice, rollSimpleDice } from '../utils/diceRoller.ts';
import { getContrastColor, darkenColor, hexToRgb } from '../utils/colorUtils.ts';
import { NotificationLog } from './ToastContainer.tsx';
import { ControlTestTracker } from './ControlTestTracker.tsx';
import { AnchorsTracker } from './AnchorsTracker.tsx';
import { PaTracker } from './PaTracker.tsx';

type RollType = 'skill' | 'absorption';

// --- Sub-componente para o Popover de Rolagem ---
interface RollPopoverProps {
    popoverData: { top: number; left: number; name: string; pool: number; rollType: RollType; };
    onClose: () => void;
    onConfirm: (name: string, pool: number, assimilationDice: number, rollType: RollType) => void;
    agentData: AgentData;
}

const RollPopover: React.FC<RollPopoverProps> = ({ popoverData, onClose, onConfirm, agentData }) => {
    const [assimilationDice, setAssimilationDice] = useState(0);
    const popoverRef = useRef<HTMLDivElement>(null);
    
    const isSkillRoll = popoverData.rollType === 'skill';
    const maxAssimilation = isSkillRoll ? Math.min(agentData.character.assimilationDice, popoverData.pool) : 0;

    // Reset assimilation dice when popover data changes
    useEffect(() => {
        setAssimilationDice(0);
    }, [popoverData.name, popoverData.pool]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleConfirm = () => {
        onConfirm(popoverData.name, popoverData.pool, isSkillRoll ? assimilationDice : 0, popoverData.rollType);
    };

    const handleAssimilationChange = (amount: number) => {
        setAssimilationDice(prev => Math.max(0, Math.min(maxAssimilation, prev + amount)));
    };

    return (
        <div 
            className="skill-roll-popover" 
            ref={popoverRef}
            style={{ top: popoverData.top, left: popoverData.left }}
            onClick={e => e.stopPropagation()}
        >
            {isSkillRoll ? (
                <>
                    <h5 className="popover-title">Usar Dados de Assimilação?</h5>
                    <div className="popover-content">
                        <label htmlFor="popover-assim-input">Quantidade:</label>
                        <div className="popover-stepper">
                            <button onClick={() => handleAssimilationChange(-1)} disabled={assimilationDice <= 0}>-</button>
                            <input 
                                id="popover-assim-input"
                                type="number" 
                                value={assimilationDice} 
                                onChange={e => setAssimilationDice(Math.max(0, Math.min(maxAssimilation, Number(e.target.value))))}
                                min="0"
                                max={maxAssimilation}
                            />
                            <button onClick={() => handleAssimilationChange(1)} disabled={assimilationDice >= maxAssimilation}>+</button>
                        </div>
                        <small>Total: {popoverData.pool} (Alma: {popoverData.pool - assimilationDice}, Assimilação: {assimilationDice})</small>
                    </div>
                </>
            ) : (
                 <h5 className="popover-title">{popoverData.name}?</h5>
            )}
            <button className="popover-confirm-btn" onClick={handleConfirm}>Confirmar Rolagem</button>
        </div>
    );
};


interface CharacterSheetPageProps {
    agentData: AgentData;
    onUpdate: (updatedAgentData: AgentData) => void;
    onBack: () => void;
    addLiveToast: (toastInfo: Omit<ToastData, 'id'>) => void;
    addLogEntry: (logInfo: Omit<ToastData, 'id'>) => void;
    logHistory: ToastData[];
    onRemoveLogEntry: (id: number) => void;
}

type Tab = 'COMBATE & EQUIP.' | 'BEYONDER' | 'MAGIA' | 'INVENTÁRIO' | 'HISTÓRICO' | 'ANTECEDENTES';

const stringToHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
};

const normalizeAttributeName = (name: string): string => {
    if (!name) return '';
    const specialCases: {[key: string]: string} = {
        'presença (fé)': 'carisma',
        'presença': 'carisma',
    };
    const lowerCaseName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return specialCases[lowerCaseName] || lowerCaseName;
};

export const CharacterSheetPage: React.FC<CharacterSheetPageProps> = ({ agentData, onUpdate, onBack, addLiveToast, addLogEntry, logHistory, onRemoveLogEntry }) => {
    if (!agentData) return <div>Carregando Ficha...</div>;

    const [activeTab, setActiveTab] = useState<Tab>('BEYONDER');
    const [isMagicGrimoireOpen, setIsMagicGrimoireOpen] = useState(false);
    const [isImprovementModalOpen, setIsImprovementModalOpen] = useState(false);
    const [isAddWeaponModalOpen, setIsAddWeaponModalOpen] = useState(false);
    const [isAddProtectionModalOpen, setIsAddProtectionModalOpen] = useState(false);
    const [isCreateMagicAttackModalOpen, setCreateMagicAttackModalOpen] = useState(false);
    const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState(false);
    const [isDiceRollerModalOpen, setIsDiceRollerModalOpen] = useState(false);
    const [isMythicalFormModalOpen, setIsMythicalFormModalOpen] = useState(false);
    const prevPathwayRef = useRef(agentData.character.pathway);
    
    const [isMythicalFormActive, setIsMythicalFormActive] = useState(false);
    const [activeMythicalForm, setActiveMythicalForm] = useState<MythicalFormStage | null>(null);
    const [corruptionPoints, setCorruptionPoints] = useState(0);
    const [originalState, setOriginalState] = useState<{ attributes: Attributes; maxVitality: number } | null>(null);
    const [hasMaintainedForm, setHasMaintainedForm] = useState(false);
    const [maintainButtonFeedback, setMaintainButtonFeedback] = useState(false);

    const [rollPopover, setRollPopover] = useState<{
        isVisible: boolean;
        top: number;
        left: number;
        name: string;
        pool: number;
        rollType: RollType;
    } | null>(null);

    const pathwayData = useMemo(() => caminhosData[agentData.character.pathway], [agentData.character.pathway]);
    
    const formToActivate = useMemo(() => {
        if (!pathwayData?.mythicalForm) return null;
        return agentData.character.sequence <= 2 ? pathwayData.mythicalForm.complete : pathwayData.mythicalForm.incomplete;
    }, [pathwayData, agentData.character.sequence]);

    const updateDerivedStats = useCallback(() => {
        if (!pathwayData) return;

        const { attributes, character, protections } = agentData;
        const { sequence } = character;
        const { vigor, espiritualidade, raciocinio, autocontrole } = attributes;

        const levelsAdvanced = Math.max(0, 9 - sequence);
        const calculatedMaxVitality = (pathwayData.pvBase || 0) + (vigor * 3) + (levelsAdvanced * (pathwayData.pvPorAvanço || 0)) + (character.tempHpBonus || 0);
        const calculatedMaxSpirituality = (pathwayData.peBase || 0) + (espiritualidade * 5) + (levelsAdvanced * (pathwayData.pePorAvanço || 0));
        const calculatedMaxWillpower = (raciocinio || 0) + (autocontrole || 0) + (pathwayData.vontadeBonus || 0);
        
        const equippedProtection = protections?.find(p => p.isEquipped);
        const calculatedAbsorption = vigor + (equippedProtection?.armorBonus || 0);

        const calculateMaxLuckPoints = (seq: number): number => {
            if (seq <= 1) return 5; if (seq <= 3) return 4; if (seq <= 5) return 3; if (seq <= 7) return 2; if (seq <= 9) return 1; return 0;
        };
        const calculatedMaxLuckPoints = character.pathway === 'CAMINHO DA RODA DA FORTUNA' ? calculateMaxLuckPoints(sequence) : 0;

        if ( calculatedMaxVitality !== character.maxVitality || calculatedMaxSpirituality !== character.maxSpirituality || calculatedMaxWillpower !== character.maxWillpower || calculatedMaxLuckPoints !== character.maxLuckPoints || calculatedAbsorption !== character.absorption || character.vitality > calculatedMaxVitality || character.spirituality > calculatedMaxSpirituality || character.willpower > calculatedMaxWillpower || (character.luckPoints || 0) > calculatedMaxLuckPoints ) {
            onUpdate({
                ...agentData,
                character: {
                    ...character,
                    maxVitality: calculatedMaxVitality,
                    vitality: Math.min(character.vitality || 0, calculatedMaxVitality),
                    maxSpirituality: calculatedMaxSpirituality,
                    spirituality: Math.min(character.spirituality || 0, calculatedMaxSpirituality),
                    maxWillpower: calculatedMaxWillpower,
                    willpower: Math.min(character.willpower || 0, calculatedMaxWillpower),
                    absorption: calculatedAbsorption,
                    maxLuckPoints: calculatedMaxLuckPoints,
                    luckPoints: Math.min(character.luckPoints || 0, calculatedMaxLuckPoints),
                },
            });
        }
    }, [agentData, pathwayData, onUpdate]);

    useEffect(() => {
        updateDerivedStats();
    }, [updateDerivedStats]);


    const handleCharacterFieldChange = (field: keyof Character, value: any) => {
        const updatedCharacter = { ...agentData.character, [field]: value };
        
        if (field === 'sequence' && value < agentData.character.sequence) {
            updatedCharacter.paTotalGasto = 0;
            updatedCharacter.purifiedDiceThisSequence = 0;
            updatedCharacter.assimilationDice = (agentData.character.assimilationDice || 0) + 4;
            updatedCharacter.maxAssimilationDice = (agentData.character.maxAssimilationDice || 0) + 4;
            
            addLiveToast({ type: 'success', title: 'Avanço de Sequência!', message: `Você avançou para a Sequência ${value}. Ganhou 4 Dados de Assimilação.` });
        }
        
        onUpdate({ ...agentData, character: updatedCharacter });
    };

    const handleAttributeChange = (attribute: keyof Attributes, value: number) => {
        onUpdate({ ...agentData, attributes: { ...agentData.attributes, [attribute]: value } });
    };

    const toggleMythicalForm = () => {
        if (isMythicalFormActive) {
            if (originalState) {
                const expiationDifficulty = Math.max(1, 1 + corruptionPoints);
                const { willpower } = agentData.character;
                const { rolls, successes } = rollDice(willpower, expiationDifficulty);
                const expiationPassed = successes > 0;
                
                let logMessage = "Forma Mítica desativada.";
                let logDetails = `Teste de Expiação: Parada ${willpower}, Dificuldade ${expiationDifficulty}. Rolagem [${rolls.join(', ')}]. `;
                
                let newSanity = agentData.character.sanity;

                if (!expiationPassed) {
                    const sanityLoss = corruptionPoints;
                    newSanity -= sanityLoss;
                    logDetails += `Falha! Perdeu ${sanityLoss} de Sanidade.`;
                    addLiveToast({ type: 'failure', title: 'Corrupção Mítica', message: `Falhou no Teste de Expiação! Perdeu ${sanityLoss} de Sanidade.` });
                } else {
                    logDetails += `Sucesso! A mente resistiu à corrupção.`;
                }
                addLogEntry({ type: 'info', title: 'Forma Mítica', message: logMessage, details: logDetails });

                const agentToUpdate = { ...agentData, attributes: originalState.attributes, character: { ...agentData.character, vitality: Math.min(agentData.character.vitality, originalState.maxVitality), tempHpBonus: 0, sanity: newSanity } };
                onUpdate(agentToUpdate);
            }
    
            setIsMythicalFormActive(false);
            setActiveMythicalForm(null);
            setOriginalState(null);
            setHasMaintainedForm(false);
            setCorruptionPoints(0);
        } else {
            if (!formToActivate) {
                addLiveToast({ type: 'failure', title: 'Forma Mítica', message: 'Dados da Forma Mítica não encontrados para este caminho.' });
                return;
            }
        
            setOriginalState({ attributes: { ...agentData.attributes }, maxVitality: agentData.character.maxVitality });
    
            const newAttributes = { ...agentData.attributes };
            Object.entries(formToActivate.attributeBoosts).forEach(([attr, boost]) => {
                let key = attr.toLowerCase();
                 if (key.includes('presença')) key = 'carisma';
                if (newAttributes.hasOwnProperty(key)) newAttributes[key as keyof Attributes] += boost;
            });
            
            const vitalityIncrease = (newAttributes.vigor - agentData.attributes.vigor) * 3 + formToActivate.tempHpBonus;

            onUpdate({ ...agentData, attributes: newAttributes, character: { ...agentData.character, vitality: agentData.character.vitality + vitalityIncrease, tempHpBonus: formToActivate.tempHpBonus } });
    
            setIsMythicalFormActive(true);
            setActiveMythicalForm(formToActivate);
            setCorruptionPoints(0);
            setHasMaintainedForm(false);
            addLogEntry({ type: 'info', title: 'Forma Mítica', message: 'Forma Mítica ativada!', details: `Bônus aplicados. Cuidado com a corrupção.` });
        }
    };
    
    const handleMaintainForm = () => {
        if (!isMythicalFormActive || !activeMythicalForm || hasMaintainedForm) return;
    
        setHasMaintainedForm(true);
        setMaintainButtonFeedback(true);
        setTimeout(() => setMaintainButtonFeedback(false), 400);

        const newCorruptionPoints = corruptionPoints + 1;
        setCorruptionPoints(newCorruptionPoints);
        
        const { sequence } = agentData.character;
        const formInUse = sequence <= 2 ? pathwayData?.mythicalForm?.complete : pathwayData?.mythicalForm?.incomplete;
        let sanityCost = 0;
        let sanityCostString = "";
    
        if ((sequence === 4 || sequence === 3) && formInUse?.sanityCostPerTurn) {
            sanityCost = rollSimpleDice(formInUse.sanityCostPerTurn);
            sanityCostString = ` Custo: ${sanityCost} (${formInUse.sanityCostPerTurn}) de Sanidade`;
            handleCharacterFieldChange('sanity', agentData.character.sanity - sanityCost);
        }
        
        addLogEntry({ type: 'info', title: 'Forma Mítica Mantida', message: `Corrupção aumentou para ${newCorruptionPoints}.`, details: `Você mantém a Forma Mítica.${sanityCostString} e +1 Ponto de Corrupção.` });
        addLiveToast({ type: 'info', title: 'Forma Mítica Mantida', message: `Corrupção: ${newCorruptionPoints}.` });
    };
    
    const handlePassTurn = () => {
        if (isMythicalFormActive && !hasMaintainedForm) {
            addLogEntry({ type: 'info', title: 'Forma Mítica', message: 'Forma Mítica não foi mantida e se desfez.' });
            toggleMythicalForm();
        } else {
             addLogEntry({ type: 'info', title: 'Turno', message: 'Turno encerrado.' });
        }
        setHasMaintainedForm(false);
    };

    const handleControlTest = () => {
        const { autocontrole } = agentData.attributes;
        const { willpower, controlStage } = agentData.character;
        const pool = autocontrole + willpower;
        const difficulty = 6 + (controlStage || 0);
        const { rolls, successes } = rollDice(pool, difficulty);

        const resultType = successes > 0 ? 'success' : 'failure';
        const title = "Teste de Controle";
        const message = `${successes} sucesso(s)!`;
        const details = `Parada: ${pool} (Autocontrole ${autocontrole} + Vontade ${willpower})\nDificuldade: ${difficulty}\nRolagem: [${rolls.join(', ')}]`;

        addLiveToast({ type: resultType, title, message });
        addLogEntry({ type: resultType, title, message, details });
    };

    const handleInvokeAnchor = (index: number) => {
        const anchor = agentData.character.anchors[index];
        if (!anchor || !anchor.conviction || !anchor.symbol) return;

        const newSanity = Math.min(agentData.character.maxSanity, agentData.character.sanity + 1);
        handleCharacterFieldChange('sanity', newSanity);

        addLiveToast({ type: 'info', title: "Âncora Invocada", message: `Você recuperou 1 de Sanidade ao focar em "${anchor.conviction}".` });
    };

    const handleConfirmRoll = (name: string, pool: number, assimilationDiceUsed: number, rollType: RollType) => {
        if (rollType === 'skill') {
            if (assimilationDiceUsed > agentData.character.assimilationDice) {
                addLiveToast({ type: 'failure', title: 'Dados Insuficientes', message: `Você tentou usar ${assimilationDiceUsed}, mas só tem ${agentData.character.assimilationDice}.` });
                setRollPopover(null);
                return;
            }
    
            const soulDiceUsed = Math.max(0, pool - assimilationDiceUsed);
    
            const soulRolls = Array.from({ length: soulDiceUsed }, () => Math.floor(Math.random() * 10) + 1);
            const assimilationRolls = Array.from({ length: assimilationDiceUsed }, () => Math.floor(Math.random() * 10) + 1);
    
            let madnessTriggers = 0;
            const soulSuccessContributions: number[] = [];
            const assimilationSuccessContributions: number[] = [];
    
            soulRolls.forEach(roll => {
                if (roll >= 6 && roll <= 9) soulSuccessContributions.push(1);
                else if (roll === 10) soulSuccessContributions.push(2);
            });
    
            assimilationRolls.forEach(roll => {
                if (roll === 1) madnessTriggers++;
                else if (roll >= 6 && roll <= 9) assimilationSuccessContributions.push(2);
                else if (roll === 10) assimilationSuccessContributions.push(3);
            });
            
            const soulSuccesses = soulSuccessContributions.reduce((a, b) => a + b, 0);
            const assimilationSuccesses = assimilationSuccessContributions.reduce((a, b) => a + b, 0);
    
            const allSuccessContributions = [...soulSuccessContributions, ...assimilationSuccessContributions];
            let totalSuccesses = allSuccessContributions.reduce((acc, val) => acc + val, 0);
            
            let madnessMessage = '';
            if (madnessTriggers > 0) {
                allSuccessContributions.sort((a, b) => b - a);
                let successesCancelled = 0;
                for (let i = 0; i < madnessTriggers; i++) {
                    if (i < allSuccessContributions.length) {
                        const cancelled = allSuccessContributions[i];
                        totalSuccesses -= cancelled;
                        successesCancelled += cancelled;
                    }
                }
                madnessMessage = ` O poder se rebelou, cancelando ${successesCancelled} sucesso(s).`;
            }
            
            const finalSuccesses = Math.max(0, totalSuccesses);
            
            const breakdownLines = [];
            if (soulRolls.length > 0) breakdownLines.push(`Alma [${soulRolls.join(', ')}] = ${soulSuccesses} Sucesso(s)`);
            if (assimilationRolls.length > 0) breakdownLines.push(`Assimilação [${assimilationRolls.join(', ')}] = ${assimilationSuccesses} Sucesso(s)`);
            if (madnessTriggers > 0) breakdownLines.push(`Intrusão de Loucura (${madnessTriggers}x '1') cancelou os maiores sucessos.`);
            
            const resultType: ToastData['type'] = madnessTriggers > 0 ? 'failure' : (finalSuccesses > 0 ? 'success' : 'failure');
            const title = madnessTriggers > 0 ? `⚠️ INTRUSÃO DE LOUCURA!` : name;
            const toastMessage = madnessTriggers > 0 ? `O poder se rebelou! Resultado: ${finalSuccesses} sucesso(s).` : `${finalSuccesses} sucesso(s).`;
            const logMessage = `${finalSuccesses} sucesso(s).${madnessMessage}`;
            const details = breakdownLines.join('\n');
            
            addLiveToast({ type: resultType, title, message: toastMessage });
            addLogEntry({ type: resultType, title: title, message: logMessage, details });
    
            if (assimilationDiceUsed > 0) {
                handleCharacterFieldChange('assimilationDice', agentData.character.assimilationDice - assimilationDiceUsed);
            }

        } else if (rollType === 'absorption') {
            const rolls = Array.from({ length: pool }, () => Math.floor(Math.random() * 10) + 1);
            const successes = rolls.filter(r => r >= 6).length;
    
            const resultType: ToastData['type'] = successes > 0 ? 'success' : 'failure';
            const title = name;
            const message = `${successes} sucesso(s).`;
            const details = `Parada: ${pool}\nRolagem: [${rolls.join(', ')}]`;
            
            addLiveToast({ type: resultType, title, message });
            addLogEntry({ type: resultType, title, message, details });
        }

        setRollPopover(null);
    };

    const handleDirectSkillRoll = (name: string, pool: number) => {
        handleConfirmRoll(name, pool, 0, 'skill');
    };
    
    const handleRollRequest = (
        event: React.MouseEvent,
        name: string,
        pool: number,
        rollType: RollType
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setRollPopover({
            isVisible: true,
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            name,
            pool,
            rollType,
        });
    };

    const getAvatarUrl = () => {
        const { character, customization } = agentData;
        if (!customization) return character.avatarUrl;
        const sanityState = character.maxSanity > 0 ? character.sanity / character.maxSanity : 1;
        const vitalityState = character.maxVitality > 0 ? character.vitality / character.maxVitality : 1;

        if (customization.avatarInsane && sanityState <= 0.3) return customization.avatarInsane;
        if (customization.avatarDisturbed && sanityState <= 0.6) return customization.avatarDisturbed;
        if (customization.avatarHurt && vitalityState <= 0.5) return customization.avatarHurt;
        
        return customization.avatarHealthy || character.avatarUrl;
    };

    const sheetStyle = useMemo(() => {
        const color = agentData.character.pathwayColor || '#9c27b0';
        return {
            '--character-color': color,
            '--character-color-dark': darkenColor(color, 0.2),
            '--character-contrast-color': getContrastColor(color),
            '--character-color-rgb': hexToRgb(color),
        };
    }, [agentData.character.pathwayColor]);

    const tabButtons: Tab[] = ['COMBATE & EQUIP.', 'BEYONDER', 'MAGIA', 'INVENTÁRIO', 'HISTÓRICO', 'ANTECEDENTES'];

    return (
        <div className="sheet-container-v2" style={sheetStyle as React.CSSProperties}>
            <div className="sheet-management-bar">
                <button onClick={onBack} className="back-to-list-btn">← Voltar</button>
                <div className="sheet-management-actions">
                     <button onClick={handlePassTurn} className="back-to-list-btn" style={{borderColor: 'var(--success-color)', color: 'var(--success-color)'}}>Passar Turno</button>
                    <button onClick={() => setIsCustomizationModalOpen(true)} className="customize-btn" aria-label="Personalizar Ficha">
                        <PaletteIcon />
                    </button>
                </div>
            </div>
            <div className="sheet-grid">
                <div className="sheet-col-left">
                    <div className="char-header-v2">
                        <div className="char-avatar" style={{ backgroundImage: `url(${getAvatarUrl() || ''})` }}></div>
                        <div className="char-info-main"><input type="text" value={agentData.character.name} onChange={e => handleCharacterFieldChange('name', e.target.value)} /></div>
                        <div className="pathway-and-color">
                            <select className="pathway-select" value={agentData.character.pathway} onChange={e => handleCharacterFieldChange('pathway', e.target.value)}>
                                <option value="">Selecione um Caminho</option>
                                {Object.keys(caminhosData).map(path => (<option key={path} value={path}>{path}</option>))}
                            </select>
                        </div>
                        <div className="char-info-sub">
                            <input type="text" value={agentData.character.player} onChange={e => handleCharacterFieldChange('player', e.target.value)} />
                            <input type="number" value={agentData.character.sequence} onChange={e => handleCharacterFieldChange('sequence', Number(e.target.value))} />
                        </div>
                    </div>
                    <div className="status-bars-container">
                        <StatusBar label="Vitalidade" value={agentData.character.vitality} max={agentData.character.maxVitality} onValueChange={(v) => handleCharacterFieldChange('vitality', v)} onMaxValueChange={(v) => handleCharacterFieldChange('maxVitality', v)} color="#D32F2F" />
                        <StatusBar label="Espiritualidade" value={agentData.character.spirituality} max={agentData.character.maxSpirituality} onValueChange={(v) => handleCharacterFieldChange('spirituality', v)} onMaxValueChange={(v) => handleCharacterFieldChange('maxSpirituality', v)} color="#1976D2" />
                        <StatusBar label="Vontade" value={agentData.character.willpower} max={agentData.character.maxWillpower} onValueChange={(v) => handleCharacterFieldChange('willpower', v)} onMaxValueChange={(v) => handleCharacterFieldChange('maxWillpower', v)} color="#388E3C" />
                        {agentData.character.pathway === 'CAMINHO DA RODA DA FORTUNA' && (
                            <StatusBar label="Pontos de Sorte" value={agentData.character.luckPoints || 0} max={agentData.character.maxLuckPoints || 0} onValueChange={(v) => handleCharacterFieldChange('luckPoints', v)} color="#FFC107" />
                        )}
                    </div>
                    
                    {!isMythicalFormActive && agentData.character.sequence <= 4 && pathwayData?.mythicalForm && (
                        <div className="mythical-form-trigger-container">
                             <button id="mythical-form-trigger-btn" onClick={() => setIsMythicalFormModalOpen(true)} aria-label="Ativar Forma Mítica" title="Ativar Forma Mítica"><FlameIcon /></button>
                        </div>
                    )}

                    <SanityTracker sanity={agentData.character.sanity} maxSanity={agentData.character.maxSanity} onSanityChange={(v) => handleCharacterFieldChange('sanity', v)} onMaxSanityChange={(v) => handleCharacterFieldChange('maxSanity', v)} pathwayColor={agentData.character.pathwayColor || '#6a1b9a'} />
                    
                    {isMythicalFormActive ? (
                        <div id="mythical-form-status-banner">
                            <h2>Forma Mítica Ativa!</h2>
                            <p id="mf-corruption-counter">Pontos de Corrupção: {corruptionPoints}</p>
                            <div className="mythical-form-banner-actions">
                                <button id="maintain-form-btn" className={`maintain-btn ${maintainButtonFeedback ? 'feedback' : ''}`} onClick={handleMaintainForm} disabled={hasMaintainedForm}>
                                    {hasMaintainedForm ? 'Forma Mantida' : 'Manter Forma'}
                                </button>
                                <button className="deactivate-btn" onClick={toggleMythicalForm}>Desativar Forma Mítica</button>
                            </div>
                        </div>
                    ) : (
                        <AttributesSection attributes={agentData.attributes} onAttributeChange={handleAttributeChange} />
                    )}
                    
                    <AnchorsTracker anchors={agentData.character.anchors} onAnchorsChange={(v) => handleCharacterFieldChange('anchors', v)} onInvokeAnchor={handleInvokeAnchor} />
                     <PaTracker agent={agentData} onUpdate={onUpdate} onOpenImprovements={() => setIsImprovementModalOpen(true)} addLiveToast={addLiveToast} />
                </div>
                
                <div className="sheet-col-middle">
                     <div className="tabs-section">
                        <nav className="tabs-nav">
                            {tabButtons.map(tab => (<button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>))}
                        </nav>
                        <div className="tab-content">
                             <div style={{ display: activeTab === 'COMBATE & EQUIP.' ? 'block' : 'none' }}>
                                <CombatTab 
                                    agent={agentData} 
                                    onUpdate={onUpdate} 
                                    addLiveToast={addLiveToast} 
                                    addLogEntry={addLogEntry} 
                                    onOpenAddWeaponModal={() => setIsAddWeaponModalOpen(true)} 
                                    onOpenAddProtectionModal={() => setIsAddProtectionModalOpen(true)} 
                                    onOpenMagicCreator={() => setCreateMagicAttackModalOpen(true)}
                                    onRollRequest={handleRollRequest}
                                    onDirectRoll={handleDirectSkillRoll}
                                />
                            </div>
                            <div style={{ display: activeTab === 'BEYONDER' ? 'block' : 'none' }}>
                                <BeyonderTab abilities={agentData.habilidadesBeyonder} onAbilitiesChange={(v) => onUpdate({...agentData, habilidadesBeyonder: v})} pathwayData={pathwayData} sequence={agentData.character.sequence} character={agentData.character} onCharacterChange={handleCharacterFieldChange} />
                            </div>
                             <div style={{ display: activeTab === 'MAGIA' ? 'block' : 'none' }}>
                                <MagicTab agent={agentData} onUpdate={onUpdate} onOpenMagicGrimoire={() => setIsMagicGrimoireOpen(true)} addLogEntry={addLogEntry} />
                            </div>
                            <div style={{ display: activeTab === 'INVENTÁRIO' ? 'block' : 'none' }}>
                                <InventoryTab inventory={agentData.inventory} onInventoryChange={(v) => onUpdate({...agentData, inventory: v})} artifacts={agentData.artifacts} onArtifactsChange={(v) => onUpdate({...agentData, artifacts: v})} money={agentData.money} onMoneyChange={(v) => onUpdate({...agentData, money: v})} />
                            </div>
                             <div style={{ display: activeTab === 'HISTÓRICO' ? 'block' : 'none' }}>
                                <NotesTab character={agentData.character} onFieldChange={handleCharacterFieldChange} />
                            </div>
                            <div style={{ display: activeTab === 'ANTECEDENTES' ? 'block' : 'none' }}>
                                <AntecedentesTab antecedentes={agentData.antecedentes} onAntecedentesChange={(v) => onUpdate({...agentData, antecedentes: v})} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sheet-col-right">
                    <div className="pericias-section">
                        <div className="pericias-header">
                             <h3 className="section-title">Perícias</h3>
                             <button onClick={() => setIsDiceRollerModalOpen(true)} className="dice-roller-modal-btn-inline" aria-label="Abrir Rolador de Dados"><DiceIcon /></button>
                        </div>
                        {Object.entries(agentData.habilidades).map(([type, list]) => (
                            <div key={type}>
                                <h4 className="habilidade-subheader">{type === 'gerais' ? 'Gerais' : 'Investigativas'}</h4>
                                {(list as Habilidade[]).map((skill, index) => {
                                    const attrName = skill.attr.split('/')[0];
                                    const normalizedAttr = normalizeAttributeName(attrName) as keyof Attributes;
                                    const attrValue = agentData.attributes[normalizedAttr] || 0;
                                    const total = skill.points + attrValue;
                                    return (
                                        <div key={skill.name} className="pericia-item-v2">
                                            <label>{skill.name}</label>
                                            <div className="pericia-controls">
                                                <input type="number" value={skill.points} onChange={e => {
                                                    const newList = [...(list as Habilidade[])];
                                                    newList[index] = { ...skill, points: Number(e.target.value) };
                                                    onUpdate({ ...agentData, habilidades: { ...agentData.habilidades, [type]: newList } });
                                                }} />
                                                <div className="skill-total-display">{total}</div>
                                                <button className="skill-roll-btn" onClick={(e) => handleRollRequest(e, skill.name, total, 'skill')}>
                                                    <DiceIcon />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="assimilation-dice-tracker">
                        <h3 className="section-title">Dados de Assimilação</h3>
                        <div className="pa-display">
                            <div className="pa-box">
                                <div className="pa-box-value">
                                    <input type="number" value={agentData.character.assimilationDice} onChange={e => handleCharacterFieldChange('assimilationDice', Number(e.target.value))} />
                                </div>
                                <div className="pa-box-label">Atuais</div>
                            </div>
                            <div className="pa-box">
                                <div className="pa-box-value">
                                    <input type="number" value={agentData.character.maxAssimilationDice} onChange={e => handleCharacterFieldChange('maxAssimilationDice', Number(e.target.value))} />
                                </div>
                                <div className="pa-box-label">Máximos</div>
                            </div>
                        </div>
                    </div>
                    <ControlTestTracker currentStage={agentData.character.controlStage} onStageChange={(v) => handleCharacterFieldChange('controlStage', v)} onPerformTest={handleControlTest} />
                    <NotificationLog toasts={logHistory} onRemove={onRemoveLogEntry} />
                </div>
            </div>

            {rollPopover?.isVisible && (
                <RollPopover
                    popoverData={rollPopover}
                    onClose={() => setRollPopover(null)}
                    onConfirm={handleConfirmRoll}
                    agentData={agentData}
                />
            )}

            {isMagicGrimoireOpen && <MagicGrimoireModal isOpen={isMagicGrimoireOpen} onClose={() => setIsMagicGrimoireOpen(false)} onAddParticles={(p) => onUpdate({...agentData, learnedParticles: [...agentData.learnedParticles, ...p.map(i => ({...i, id: Date.now() + Math.random()}))]})} />}
            {isImprovementModalOpen && <ImprovementModal isOpen={isImprovementModalOpen} onClose={() => setIsImprovementModalOpen(false)} agent={agentData} onUpdateAgent={onUpdate} addLiveToast={addLiveToast} />}
            {isAddWeaponModalOpen && <AddWeaponModal isOpen={isAddWeaponModalOpen} onClose={() => setIsAddWeaponModalOpen(false)} onAddAttack={(a) => onUpdate({...agentData, attacks: [...agentData.attacks, a]})} />}
            {isAddProtectionModalOpen && <AddProtectionModal isOpen={isAddProtectionModalOpen} onClose={() => setIsAddProtectionModalOpen(false)} onAddProtection={(p) => onUpdate({...agentData, protections: [...agentData.protections, p]})} />}
            {isCreateMagicAttackModalOpen && <CreateMagicAttackModal isOpen={isCreateMagicAttackModalOpen} onClose={() => setCreateMagicAttackModalOpen(false)} onAddAttack={(a) => onUpdate({...agentData, attacks: [...agentData.attacks, a]})} agent={agentData} />}
            {isCustomizationModalOpen && <CustomizationModal isOpen={isCustomizationModalOpen} onClose={() => setIsCustomizationModalOpen(false)} agent={agentData} onUpdate={onUpdate} />}
            {isDiceRollerModalOpen && <DiceRollerModal isOpen={isDiceRollerModalOpen} onClose={() => setIsDiceRollerModalOpen(false)} addLiveToast={addLiveToast} addLogEntry={addLogEntry} agentData={agentData} onUpdate={onUpdate} />}
            {isMythicalFormModalOpen && formToActivate && (
                <MythicalFormModal isOpen={isMythicalFormModalOpen} onClose={() => setIsMythicalFormModalOpen(false)} onConfirm={() => { toggleMythicalForm(); setIsMythicalFormModalOpen(false); }} mythicalFormData={formToActivate} pathwayName={pathwayData?.formaMitica?.nome || 'Forma Mítica'} sequence={agentData.character.sequence} />
            )}
        </div>
    );
};