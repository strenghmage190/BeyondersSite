import React from 'react';

interface HeaderProps {
    onShowAgents: () => void;
    onShowCampaigns?: () => void;
    onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowAgents, onShowCampaigns, onLogout }) => {
    return (
        <header className="app-header">
            <h1 className="title-font">Beyonders</h1>
            <nav>
                <button onClick={onShowAgents}>Agentes</button>
                <button onClick={() => onShowCampaigns && onShowCampaigns()}>Campanhas</button>
                <button onClick={onLogout} className="logout-btn">Sair</button>
            </nav>
        </header>
    );
};