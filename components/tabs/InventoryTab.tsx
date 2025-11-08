import React, { useState, useMemo, useCallback } from 'react';
import { InventoryItem, Artifact, Money } from '../../types.ts';

interface InventoryTabProps {
    inventory: InventoryItem[];
    onInventoryChange: (newItems: InventoryItem[]) => void;
    artifacts: Artifact[];
    onArtifactsChange: (newArtifacts: Artifact[]) => void;
    money: Money;
    onMoneyChange: (newMoney: Money) => void;
}

const LIBRAS_TO_PENNIES = 240; // 20 soli * 12 pennies
const SOLI_TO_PENNIES = 12;

export const InventoryTab: React.FC<InventoryTabProps> = ({
    inventory = [], onInventoryChange, artifacts = [], onArtifactsChange, money, onMoneyChange
}) => {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [amounts, setAmounts] = useState({ libras: '', soli: '', pennies: '' });

    const categories = useMemo(() => {
        const cats = new Set(inventory.map(item => item.category));
        return ['Todos', ...Array.from(cats)];
    }, [inventory]);

    const filteredInventory = useMemo(() => {
        if (activeFilter === 'Todos') return inventory;
        return inventory.filter(item => item.category === activeFilter);
    }, [inventory, activeFilter]);
    
    const handleItemChange = (id: number, field: keyof InventoryItem, value: any) => {
        onInventoryChange(inventory.map(item => item.id === id ? { ...item, [field]: value } : item));
    };
    const handleAddItem = () => {
        const newItem: InventoryItem = { id: Date.now(), name: 'Novo Item', quantity: 1, category: 'Geral', description: '', imageUrl: '' };
        onInventoryChange([...inventory, newItem]);
    };
    const handleDeleteItem = (id: number) => {
        onInventoryChange(inventory.filter(item => item.id !== id));
    };

    const handleArtifactChange = (id: number, field: keyof Artifact, value: any) => {
        onArtifactsChange(artifacts.map(art => art.id === id ? { ...art, [field]: value } : art));
    };
    const handleAddArtifact = () => {
        const newArtifact: Artifact = { id: Date.now(), name: 'Novo Artefato', grau: 0, poderContido: '', maldicao: '', afinidade: '', ritualSelamento: '', imageUrl: '' };
        onArtifactsChange([...artifacts, newArtifact]);
    };
    const handleDeleteArtifact = (id: number) => {
        onArtifactsChange(artifacts.filter(art => art.id !== id));
    };
    
    const handleAmountChange = (currency: keyof Money, value: string) => {
        setAmounts(prev => ({...prev, [currency]: value}));
    }

    const handleUpdateMoney = useCallback((changeLibras: number, changeSoli: number, changePennies: number) => {
        const currentMoney = money || { libras: 0, soli: 0, pennies: 0 };
        
        // 1. Convert everything to the smallest unit (pennies)
        let totalPennies = (currentMoney.libras * LIBRAS_TO_PENNIES) + 
                           (currentMoney.soli * SOLI_TO_PENNIES) + 
                           currentMoney.pennies;
    
        // 2. Apply the change
        totalPennies += (changeLibras * LIBRAS_TO_PENNIES) + 
                        (changeSoli * SOLI_TO_PENNIES) + 
                        changePennies;
    
        // Ensure total doesn't go below zero
        totalPennies = Math.max(0, totalPennies);
    
        // 3. Convert back to libras, soli, and pennies
        const libras = Math.floor(totalPennies / LIBRAS_TO_PENNIES);
        const remainingAfterLibras = totalPennies % LIBRAS_TO_PENNIES;
        const soli = Math.floor(remainingAfterLibras / SOLI_TO_PENNIES);
        const pennies = remainingAfterLibras % SOLI_TO_PENNIES;
    
        onMoneyChange({ libras, soli, pennies });
    
    }, [money, onMoneyChange]);

    const handleAddMoney = (currency: keyof Money) => {
        const value = parseInt(amounts[currency], 10);
        if (isNaN(value) || value <= 0) return;

        if (currency === 'libras') handleUpdateMoney(value, 0, 0);
        if (currency === 'soli') handleUpdateMoney(0, value, 0);
        if (currency === 'pennies') handleUpdateMoney(0, 0, value);
        
        handleAmountChange(currency, '');
    };
    
    const handleRemoveMoney = (currency: keyof Money) => {
        const value = parseInt(amounts[currency], 10);
        if (isNaN(value) || value <= 0) return;

        if (currency === 'libras') handleUpdateMoney(-value, 0, 0);
        if (currency === 'soli') handleUpdateMoney(0, -value, 0);
        if (currency === 'pennies') handleUpdateMoney(0, 0, -value);

        handleAmountChange(currency, '');
    };
    
    const renderCurrencyManager = (name: string, key: keyof Money) => {
        const currentMoney = money || { libras: 0, soli: 0, pennies: 0 };
        return (
            <div className="money-manager">
                <div className="money-total-display">
                    <span>{name} Total:</span>
                    <span className="money-total-value">{currentMoney[key] || 0}</span>
                </div>
                <div className="money-controls">
                    <input 
                        type="number"
                        value={amounts[key]}
                        onChange={(e) => handleAmountChange(key, e.target.value)}
                        placeholder="Quantia"
                        min="1"
                    />
                    <button onClick={() => handleAddMoney(key)}>+ Adicionar</button>
                    <button onClick={() => handleRemoveMoney(key)}>- Remover</button>
                </div>
            </div>
        );
    };

    const currentMoney = money || { libras: 0, soli: 0, pennies: 0 };

    return (
        <div>
            <div className="inventory-section">
                <div className="tab-header">
                    <h4>Equipamentos & Itens</h4>
                    <button onClick={handleAddItem}>+ Novo Item</button>
                </div>
                <div className="category-filters">
                    {categories.map(cat => (
                        <button key={cat} className={activeFilter === cat ? 'active' : ''} onClick={() => setActiveFilter(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>
                {filteredInventory.map(item => (
                    <div key={item.id} className="tab-list-item">
                        <div className="inventory-item-details">
                            <div className="item-header">
                                <input type="text" value={item.name} onChange={e => handleItemChange(item.id, 'name', e.target.value)} />
                                <button onClick={() => handleDeleteItem(item.id)}>&times;</button>
                            </div>
                            <div className="inventory-item-grid">
                                <div><label>Qtd.</label><input type="number" value={item.quantity} onChange={e => handleItemChange(item.id, 'quantity', Number(e.target.value))} /></div>
                                <div><label>Categoria</label><input type="text" value={item.category} onChange={e => handleItemChange(item.id, 'category', e.target.value)} /></div>
                            </div>
                            <textarea value={item.description} onChange={e => handleItemChange(item.id, 'description', e.target.value)} placeholder="Descrição..."></textarea>
                        </div>
                    </div>
                ))}
            </div>

            <div className="artifacts-section">
                <div className="tab-header">
                    <h4>Artefatos Selados</h4>
                    <button onClick={handleAddArtifact}>+ Novo Artefato</button>
                </div>
                {artifacts.map(art => (
                    <div key={art.id} className="tab-list-item">
                         <div className="item-header">
                            <input type="text" value={art.name} onChange={e => handleArtifactChange(art.id, 'name', e.target.value)} />
                            <button onClick={() => handleDeleteArtifact(art.id)}>&times;</button>
                        </div>
                        <textarea value={art.poderContido} onChange={e => handleArtifactChange(art.id, 'poderContido', e.target.value)} placeholder="Poder Contido..."></textarea>
                        <textarea value={art.maldicao} onChange={e => handleArtifactChange(art.id, 'maldicao', e.target.value)} placeholder="Maldição..."></textarea>
                    </div>
                ))}
            </div>

            <div className="money-section">
                <div className="tab-header"><h4>Dinheiro</h4></div>
                 <div className="money-grand-total">
                    <div className="total-group">
                        <span className="money-total-value">{currentMoney.libras}</span>
                        <span className="total-label">Libras</span>
                    </div>
                     <div className="total-group">
                        <span className="money-total-value">{currentMoney.soli}</span>
                        <span className="total-label">Solis</span>
                    </div>
                     <div className="total-group">
                        <span className="money-total-value">{currentMoney.pennies}</span>
                        <span className="total-label">Pennies</span>
                    </div>
                </div>
                <div className="money-trackers-grid">
                    {renderCurrencyManager("Libras", "libras")}
                    {renderCurrencyManager("Solis", "soli")}
                    {renderCurrencyManager("Pennies", "pennies")}
                </div>
            </div>
        </div>
    );
};