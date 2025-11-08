import React from 'react';

interface HeaderProps {
    onShowAgents: () => void;
    onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowAgents, onLogout }) => {
    return (
        <header className="app-header">
            <h1 className="title-font">Beyonders</h1>
            <nav>
                <button onClick={onShowAgents}>Agentes</button>
                <button onClick={onLogout} className="logout-btn">Sair</button>
            </nav>
        </header>
    );
};