import React, { useState, useEffect } from 'react';
import { ProtectionItem } from '../../types';

interface AddProtectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddProtection: (protection: ProtectionItem) => void;
}

const initialProtectionState: Omit<ProtectionItem, 'id' | 'isEquipped'> = {
    name: '',
    armorBonus: 0,
    qualities: '',
};

export const AddProtectionModal: React.FC<AddProtectionModalProps> = ({ isOpen, onClose, onAddProtection }) => {
    const [protection, setProtection] = useState(initialProtectionState);

    useEffect(() => {
        if (isOpen) {
            setProtection(initialProtectionState);
        }
    }, [isOpen]);

    const handleChange = (field: keyof typeof initialProtectionState, value: string | number) => {
        setProtection(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProtection: ProtectionItem = {
            id: Date.now(),
            ...protection,
            isEquipped: false,
        };
        onAddProtection(newProtection);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Adicionar Nova Proteção</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="add-attack-form">
                    <div className="form-grid" style={{gridTemplateColumns: '1fr'}}>
                        <div className="form-group">
                            <label>Nome da Proteção</label>
                            <input type="text" value={protection.name} onChange={e => handleChange('name', e.target.value)} required placeholder="Ex: Casaco de Couro Reforçado"/>
                        </div>
                        <div className="form-group">
                            <label>Bônus de Armadura</label>
                            <input type="number" value={protection.armorBonus} onChange={e => handleChange('armorBonus', Number(e.target.value))} />
                        </div>
                        <div className="form-group">
                            <label>Penalidades e Qualidades</label>
                            <input type="text" value={protection.qualities} onChange={e => handleChange('qualities', e.target.value)} placeholder="Ex: Nenhuma, Barulhenta, Incômoda" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit">Adicionar Proteção</button>
                    </div>
                </form>
            </div>
        </div>
    );
};