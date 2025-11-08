import React, { useState, useEffect, useRef } from 'react';
import { AgentData, CustomizationSettings } from '../../types.ts';

interface CustomizationModalProps {
    isOpen: boolean;
    onClose: () => void;
    agent: AgentData;
    onUpdate: (updatedAgent: AgentData) => void;
}

type AvatarField = 'avatarHealthy' | 'avatarHurt' | 'avatarDisturbed' | 'avatarInsane';

export const CustomizationModal: React.FC<CustomizationModalProps> = ({ isOpen, onClose, agent, onUpdate }) => {
    const [settings, setSettings] = useState<CustomizationSettings>(agent.customization);
    const [color, setColor] = useState(agent.character.pathwayColor);

    const fileInputRefs = {
        avatarHealthy: useRef<HTMLInputElement>(null),
        avatarHurt: useRef<HTMLInputElement>(null),
        avatarDisturbed: useRef<HTMLInputElement>(null),
        avatarInsane: useRef<HTMLInputElement>(null),
    };

    useEffect(() => {
        if (isOpen) {
            setSettings(agent.customization || { useOpenDyslexicFont: false, avatarHealthy: '', avatarHurt: '', avatarDisturbed: '', avatarInsane: '' });
            setColor(agent.character.pathwayColor);
        }
    }, [isOpen, agent]);

    const handleSettingChange = (field: keyof CustomizationSettings, value: any) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: AvatarField) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                if (loadEvent.target?.result) {
                    handleSettingChange(field, loadEvent.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const updatedAgent = {
            ...agent,
            customization: settings,
            character: {
                ...agent.character,
                pathwayColor: color,
            },
        };
        onUpdate(updatedAgent);
        onClose();
    };

    if (!isOpen) return null;

    const renderAvatarInput = (field: AvatarField, label: string) => (
        <div className="avatar-input-row">
            <label>{label}</label>
            <input type="text" placeholder="URL ou carregue um arquivo..." value={settings[field] || ''} onChange={e => handleSettingChange(field, e.target.value)} />
            <input 
                type="file" 
                ref={fileInputRefs[field]} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={(e) => handleFileChange(e, field)} 
            />
            <button type="button" className="upload-btn" onClick={() => fileInputRefs[field].current?.click()}>Carregar</button>
        </div>
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="title-font">Personalização da Ficha</h3>
                    <button onClick={onClose} className="close-modal-btn">&times;</button>
                </div>
                <div className="customization-modal-body">
                    
                    <div className="customization-section">
                        <h4>Aparência</h4>
                        <div className="form-group">
                            <label>Cor de Destaque</label>
                            <input type="color" className="pathway-color-picker" value={color} onChange={e => setColor(e.target.value)} style={{padding: '2px', height: '40px'}}/>
                        </div>
                        {renderAvatarInput('avatarHealthy', 'Avatar (Saudável)')}
                        {renderAvatarInput('avatarHurt', 'Avatar (Ferido)')}
                        {renderAvatarInput('avatarDisturbed', 'Avatar (Perturbado)')}
                        {renderAvatarInput('avatarInsane', 'Avatar (Insano)')}
                    </div>

                    <div className="customization-section">
                        <h4>Acessibilidade</h4>
                        <div className="toggle-row">
                            <label>Fonte para Dislexia</label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={settings.useOpenDyslexicFont} onChange={e => handleSettingChange('useOpenDyslexicFont', e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button onClick={handleSave}>Salvar Alterações</button>
                </div>
            </div>
        </div>
    );
};