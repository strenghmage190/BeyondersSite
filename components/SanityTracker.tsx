import React from 'react';

interface SanityTrackerProps {
    sanity: number;
    maxSanity: number;
    onSanityChange: (value: number) => void;
    onMaxSanityChange: (value: number) => void;
    pathwayColor: string;
}

export const SanityTracker: React.FC<SanityTrackerProps> = ({ sanity, maxSanity, onSanityChange, onMaxSanityChange, pathwayColor }) => {
    
    const handlePointClick = (index: number) => {
        // Clicar em uma caixa define a sanidade para aquele valor
        // Não permite clicar em caixas degradadas
        if (index + 1 > maxSanity) return;
        onSanityChange(index + 1);
    };

    return (
        <div className="sanity-tracker">
            <div className="status-bar-header">
                <span className="status-bar-label">Sanidade</span>
                <div className="status-bar-values">
                    <input
                        type="number"
                        value={sanity}
                        onChange={e => onSanityChange(Number(e.target.value))}
                        className="status-input"
                        max={maxSanity}
                        min={0}
                    />
                    <span>/</span>
                     <input
                        type="number"
                        value={maxSanity}
                        onChange={e => onMaxSanityChange(Number(e.target.value))}
                        className="status-input"
                        max={10}
                        min={0}
                    />
                </div>
            </div>
            <div className="sanity-track">
                {Array.from({ length: 10 }).map((_, index) => {
                    const pointValue = index + 1;
                    let status = '';
                    if (pointValue > maxSanity) {
                        status = 'degraded';
                    } else if (pointValue <= sanity) {
                        status = 'full';
                    } else {
                        status = 'empty';
                    }

                    return (
                        <div 
                            key={index}
                            className={`sanity-point ${status}`}
                            style={status === 'full' ? { backgroundColor: pathwayColor } : {}}
                            onClick={() => handlePointClick(index)}
                            title={`Sanidade ${pointValue}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};