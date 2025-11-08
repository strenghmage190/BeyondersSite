import React, { useState } from 'react';
import { ToastData } from '../types';
import { rollDice } from '../utils/diceRoller';
import { DiceIcon } from './icons';

interface DiceRollerWidgetProps {
    addToast: (toast: Omit<ToastData, 'id'>) => void;
}

interface RollResult {
    rolls: number[];
    successes: number;
}

export const DiceRollerWidget: React.FC<DiceRollerWidgetProps> = ({ addToast }) => {
    const [numDice, setNumDice] = useState(1);
    const [difficulty, setDifficulty] = useState(7);
    const [modifier, setModifier] = useState(0);
    const [rollName, setRollName] = useState("Rolagem Manual");
    
    const [lastResult, setLastResult] = useState<RollResult | null>(null);

    const handleRoll = () => {
        const pool = numDice + modifier;
        if (pool <= 0) {
            setLastResult({ rolls: [], successes: 0 });
            return;
        }
        
        const { rolls, successes } = rollDice(pool, difficulty);
        const result: RollResult = { rolls, successes };
        
        setLastResult(result);
        
        // Create toast notification
        const message = `${result.successes} sucesso(s).`;
        const details = `Parada: ${pool} (${numDice}d10 + ${modifier})\nDificuldade: ${difficulty}\nRolagem: [${result.rolls.join(', ')}]`;
        
        addToast({
            type: result.successes > 0 ? 'success' : 'failure',
            title: rollName,
            message: message,
            details: details,
        });
    };

    return (
        <div className="dice-roller-widget">
            <h3 className="section-title">Rolador de Dados</h3>
            <div className="form-group">
                <input type="text" value={rollName} onChange={e => setRollName(e.target.value || "Rolagem Manual")} placeholder="Nome da Rolagem"/>
            </div>
            <div className="dice-roller-form">
                <div className="form-group">
                    <label>Dados (d10)</label>
                    <input type="number" value={numDice} onChange={e => setNumDice(parseInt(e.target.value) || 0)} />
                </div>
                <div className="form-group">
                    <label>Bônus/Pena</label>
                    <input type="number" value={modifier} onChange={e => setModifier(parseInt(e.target.value) || 0)} />
                </div>
                <div className="form-group">
                    <label>Dificuldade</label>
                    <input type="number" value={difficulty} onChange={e => setDifficulty(parseInt(e.target.value) || 1)} min="1" max="10" />
                </div>
                 <button onClick={handleRoll} className="roll-btn">
                    <DiceIcon /> Rolar!
                </button>
            </div>
            
            {lastResult && (
                <div className="dice-results-section">
                    <h4>Última Rolagem:</h4>
                    <div className="dice-display">
                        {lastResult.rolls.map((roll, index) => (
                            <div key={index} className={`die-result ${roll >= difficulty ? 'success' : ''}`}>
                                {roll}
                            </div>
                        ))}
                    </div>
                    <div className="results-summary">
                        Total de Sucessos: <span>{lastResult.successes}</span>
                    </div>
                </div>
            )}
        </div>
    );
};