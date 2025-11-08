import React from 'react';
import { Attributes } from '../types.ts';

interface AttributesSectionProps {
    attributes: Attributes;
    onAttributeChange: (attribute: keyof Attributes, value: number) => void;
}

export const AttributesSection: React.FC<AttributesSectionProps> = ({ attributes, onAttributeChange }) => {
    const attributeGroups = {
        Físicos: ['forca', 'destreza', 'vigor'],
        Sociais: ['carisma', 'manipulacao', 'autocontrole'],
        Mentais: ['inteligencia', 'raciocinio', 'percepcao', 'espiritualidade']
    };

    const attributeLabels: Record<string, string> = {
        forca: 'Força',
        destreza: 'Destreza',
        vigor: 'Vigor',
        carisma: 'Carisma',
        manipulacao: 'Manipulação',
        autocontrole: 'Autocontrole',
        inteligencia: 'Inteligência',
        raciocinio: 'Raciocínio',
        percepcao: 'Percepção',
        espiritualidade: 'Espiritualidade'
    };


    return (
        <div className="attributes-section">
            <h3 className="section-title">Atributos</h3>
            <div className="attributes-grid">
                {Object.entries(attributeGroups).map(([groupName, attrs]) => (
                    <div key={groupName} className="attribute-category">
                        <h4>{groupName}</h4>
                        {attrs.map(attr => (
                            <div key={attr} className="attribute-row">
                                <label>{attributeLabels[attr]}</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={attributes[attr as keyof Attributes]}
                                    onChange={(e) => onAttributeChange(attr as keyof Attributes, parseInt(e.target.value, 10) || 1)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};