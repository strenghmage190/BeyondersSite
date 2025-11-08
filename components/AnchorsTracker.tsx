import React from 'react';
import { Anchor } from '../types';

interface AnchorsTrackerProps {
    anchors: Anchor[];
    onAnchorsChange: (newAnchors: Anchor[]) => void;
    onInvokeAnchor: (index: number) => void;
}

export const AnchorsTracker: React.FC<AnchorsTrackerProps> = ({ anchors = [], onAnchorsChange, onInvokeAnchor }) => {
    
    const handleAnchorChange = (index: number, field: keyof Anchor, value: string) => {
        const newAnchorsData = [...displayAnchors];
        newAnchorsData[index] = { ...newAnchorsData[index], [field]: value };
        onAnchorsChange(newAnchorsData);
    };

    const displayAnchors = [
        ...anchors,
        ...Array(Math.max(0, 3 - anchors.length)).fill({ conviction: '', symbol: '' })
    ].slice(0, 3);

    return (
        <div className="anchors-tracker">
            <h3 className="section-title">Âncoras</h3>
            <div className="anchors-list">
                {displayAnchors.map((anchor, index) => {
                    const isFilled = anchor.conviction.trim() !== '' && anchor.symbol.trim() !== '';
                    
                    return (
                        <div key={index} className="anchor-slot">
                            <div className="form-group">
                                <label htmlFor={`conviction-${index}`}>O Pilar do Eu (A Convicção):</label>
                                <input
                                    id={`conviction-${index}`}
                                    type="text"
                                    value={anchor.conviction}
                                    onChange={(e) => handleAnchorChange(index, 'conviction', e.target.value)}
                                    placeholder="Ex: Devo proteger os inocentes"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`symbol-${index}`}>A Âncora (O Símbolo):</label>
                                <input
                                    id={`symbol-${index}`}
                                    type="text"
                                    value={anchor.symbol}
                                    onChange={(e) => handleAnchorChange(index, 'symbol', e.target.value)}
                                    placeholder="Ex: Minha irmã, Melissa"
                                />
                            </div>
                            <button
                                id={`invoke-anchor-btn-${index + 1}`}
                                className="invoke-anchor-btn"
                                onClick={() => onInvokeAnchor(index)}
                                disabled={!isFilled}
                            >
                                Invocar Âncora
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};