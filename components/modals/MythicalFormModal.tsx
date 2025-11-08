import React from 'react';
import { MythicalFormStage } from '../../types';

interface MythicalFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    mythicalFormData: MythicalFormStage;
    pathwayName: string;
    sequence: number;
}

export const MythicalFormModal: React.FC<MythicalFormModalProps> = ({ isOpen, onClose, onConfirm, mythicalFormData, pathwayName, sequence }) => {
    if (!isOpen) return null;

    const { tempHpBonus, attributeBoosts, abilities, sanityCostPerTurn } = mythicalFormData;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Ativar Forma Mítica: {pathwayName}</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>

                <div className="mythical-form-modal-summary">
                    <p>Você está prestes a liberar seu poder total. A transformação aplicará os seguintes efeitos:</p>
                    
                    <h4>Bônus Imediatos</h4>
                    <ul>
                        <li><strong>Vitalidade Temporária:</strong> +{tempHpBonus}</li>
                        {Object.entries(attributeBoosts).map(([attr, boost]) => (
                            <li key={attr}>
                                <strong>Bônus de Atributo:</strong> +{boost} em {attr.charAt(0).toUpperCase() + attr.slice(1)}
                            </li>
                        ))}
                    </ul>

                    <h4>Habilidades Adquiridas</h4>
                    <ul>
                        {abilities.map(ability => (
                            <li key={ability.name}>
                                <strong>{ability.name}:</strong> {ability.desc}
                            </li>
                        ))}
                    </ul>
                    
                    <h4>Custos e Riscos</h4>
                     <ul>
                        {(sequence === 4 || sequence === 3) && sanityCostPerTurn && (
                             <li><strong>Custo de Sanidade:</strong> {sanityCostPerTurn} por turno para manter.</li>
                        )}
                        <li><strong>Corrupção Mítica:</strong> +1 Ponto de Corrupção por turno mantido.</li>
                        <li className="cost-warning">Falhar no Teste de Expiação ao desativar a forma causará Perda de Sanidade igual aos Pontos de Corrupção acumulados.</li>
                    </ul>
                </div>

                <div className="modal-footer">
                    <button onClick={onClose} style={{ background: 'transparent', border: '1px solid var(--secondary-text-color)', color: 'var(--secondary-text-color)' }}>
                        Cancelar
                    </button>
                    <button onClick={onConfirm}>
                        Ativar
                    </button>
                </div>
            </div>
        </div>
    );
};
