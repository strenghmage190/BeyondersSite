import React from 'react';
import { Antecedente } from '../../types.ts';

interface AntecedentesTabProps {
    antecedentes: Antecedente[];
    onAntecedentesChange: (newAntecedentes: Antecedente[]) => void;
}

export const AntecedentesTab: React.FC<AntecedentesTabProps> = ({ antecedentes = [], onAntecedentesChange }) => {

    const handleChange = (id: number, field: keyof Antecedente, value: string) => {
        const newAntecedentes = antecedentes.map(a => 
            a.id === id ? { ...a, [field]: value } : a
        );
        onAntecedentesChange(newAntecedentes);
    };

    const handleDelete = (id: number) => {
        onAntecedentesChange(antecedentes.filter(a => a.id !== id));
    };

    return (
        <div>
            <div className="tab-header">
                <h4>Antecedentes</h4>
            </div>
            <div className="tab-list">
                {antecedentes.map(antecedente => (
                    <div key={antecedente.id} className="tab-list-item">
                        <div className="item-header">
                             <div className="item-header-title antecedente-title">
                                <span className="antecedente-name">{antecedente.name}</span>
                                <div className="antecedente-dots">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={`dot ${i < antecedente.points ? 'filled' : ''}`}></span>
                                    ))}
                                </div>
                            </div>
                            <div className="item-header-controls">
                                <button onClick={() => handleDelete(antecedente.id)}>&times;</button>
                            </div>
                        </div>
                        <div className="item-description">
                            <textarea
                                value={antecedente.description}
                                onChange={e => handleChange(antecedente.id, 'description', e.target.value)}
                                placeholder="Descrição do antecedente..."
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};