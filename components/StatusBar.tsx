import React from 'react';

interface StatusBarProps {
    label: string;
    value: number;
    max: number;
    onValueChange: (value: number) => void;
    onMaxValueChange?: (value: number) => void; // Optional for things like Willpower
    color: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ label, value, max, onValueChange, onMaxValueChange, color }) => {
    const fillPercentage = max > 0 ? (value / max) * 100 : 0;

    return (
        <div className="status-bar">
            <div className="status-bar-header">
                <span className="status-bar-label">{label}</span>
                <div className="status-bar-values">
                    <input 
                        type="number" 
                        className="status-input" 
                        value={value} 
                        onChange={e => onValueChange(Number(e.target.value))}
                    />
                    <span>/</span>
                    <input 
                        type="number" 
                        className="status-input" 
                        value={max} 
                        onChange={e => onMaxValueChange ? onMaxValueChange(Number(e.target.value)) : null}
                        readOnly={!onMaxValueChange}
                    />
                </div>
            </div>
            <div className="status-bar-track">
                <div 
                    className="status-bar-fill" 
                    style={{ width: `${fillPercentage}%`, background: color }}
                ></div>
            </div>
        </div>
    );
};
