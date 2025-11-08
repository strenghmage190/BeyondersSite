import React, { useState } from 'react';
import { AgentData } from '../types.ts';
import { SettingsIcon } from './icons.tsx';

interface AgentListPageProps {
    agents: AgentData[];
    onSelect: (id: number) => void;
    onAdd: () => void;
    onDelete: (id: number) => void;
}

export const AgentListPage: React.FC<AgentListPageProps> = ({ agents, onSelect, onAdd, onDelete }) => {
    const [deletingAgentId, setDeletingAgentId] = useState<number | null>(null);

    const formatDate = (dateString?: string) => {
        if (!dateString) return 'Data desconhecida';
        return new Date(dateString).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };
    
    return (
        <div className="agent-list-container">
            <div className="agent-list-header">
                <h2>Selecione um Agente</h2>
                <button onClick={onAdd} className="add-agent-btn">
                    + Novo Agente
                </button>
            </div>
            {agents.length > 0 ? (
                <div className="agent-grid">
                    {agents.map((agent) => (
                        <div key={agent.id} className="agent-card">
                            <div className="agent-card-avatar" style={{ backgroundImage: `url(${agent.character.avatarUrl || ''})` }}></div>
                            <div className="agent-card-info">
                                <h3>{agent.character.name}</h3>
                                <p>{agent.character.pathway || 'Caminho não definido'} - Sequência {agent.character.sequence}</p>
                                <p className="agent-card-date">Última modificação: {formatDate(agent.lastModified)}</p>
                            </div>
                            <div className="agent-card-actions">
                                <div className="settings-wrapper">
                                     <button className="settings-btn" onClick={() => setDeletingAgentId(deletingAgentId === agent.id ? null : agent.id)}>
                                        <SettingsIcon />
                                    </button>
                                     {deletingAgentId === agent.id && (
                                        <button className="delete-btn-popup" onClick={(e) => { e.stopPropagation(); onDelete(agent.id!); }}>
                                            Apagar
                                        </button>
                                    )}
                                </div>
                                <button className="access-sheet-btn" onClick={() => onSelect(agent.id!)}>
                                    Acessar Ficha
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum agente encontrado. Clique em "+ Novo Agente" para começar.</p>
            )}
        </div>
    );
};
