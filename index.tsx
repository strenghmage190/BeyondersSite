import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgentListPage } from './components/AgentListPage';
import { CharacterSheetPage } from './components/CharacterSheetPage';
import { Header } from './components/Header';
import { initialAgentData } from './constants';
import { AgentData, ToastData } from './types';
import { NotificationLog } from './components/ToastContainer';
import { LiveToastContainer } from './components/LiveToastContainer'; // Importa o novo container de toasts
import { AuthPage } from './components/AuthPage';
// O caminho deve ser relativo a partir de index.tsx até o seu main.css
import './styles/main.css';

// --- Componente Principal da Aplicação ---
const App = () => {
    const [agents, setAgents] = useState<AgentData[]>([]);
    const [activeAgentId, setActiveAgentId] = useState<number | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // --- Estados separados para Log e Toasts ---
    const [logHistory, setLogHistory] = useState<ToastData[]>([]); // Histórico permanente
    const [liveToasts, setLiveToasts] = useState<ToastData[]>([]); // Notificações temporárias

    // --- Lógica do Histórico (Log de Atividades) ---
    const addLogEntry = (logInfo: Omit<ToastData, 'id'>) => {
        const newLogEntry = { ...logInfo, id: Date.now() + Math.random() };
        setLogHistory(prev => [newLogEntry, ...prev].slice(0, 15)); // Limita a 15 entradas no log
    };

    const removeLogEntry = (id: number) => {
        setLogHistory(prev => prev.filter(t => t.id !== id));
    };

    // --- Lógica das Notificações (Live Toasts) ---
    const addLiveToast = (toastInfo: Omit<ToastData, 'id'>) => {
        const newToast = { ...toastInfo, id: Date.now() + Math.random() };
        setLiveToasts(prev => [...prev, newToast]);
        setTimeout(() => {
            removeLiveToast(newToast.id);
        }, 5000); // Auto-remove após 5 segundos
    };

    const removeLiveToast = (id: number) => {
        setLiveToasts(prev => prev.filter(t => t.id !== id));
    };


    // Simula a busca de dados do servidor após o login
    const loadUserAgents = () => {
        console.log("Simulando busca de agentes do servidor...");
        // Em uma aplicação real, aqui seria uma chamada fetch/axios para a API
        // Por enquanto, vamos continuar usando o localStorage para manter os dados durante a transição
        try {
            const savedAgents = localStorage.getItem('beyondersAgents');
            if (savedAgents) {
                setAgents(JSON.parse(savedAgents));
            } else {
                 setAgents([]); // Começa vazio se não houver nada salvo
            }
        } catch (error) {
            console.error("Falha ao carregar agentes (mock):", error);
            setAgents([]);
        }
    };
    
    // --- Novos Handlers de Autenticação ---
    const handleLogin = (token: string) => {
        console.log("Login bem-sucedido, token:", token);
        localStorage.setItem('authToken', token); // Salva o token para persistir a sessão
        setIsLoggedIn(true);
        loadUserAgents(); // Carrega os dados do usuário após o login
    };

    const handleLogout = () => {
        console.log("Fazendo logout...");
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setAgents([]);
        setActiveAgentId(null);
    };

    // --- Verifica sessão existente no carregamento inicial ---
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            console.log("Sessão existente encontrada.");
            setIsLoggedIn(true);
            loadUserAgents();
        }
    }, []);

    const activeAgent = agents.find(a => a.id === activeAgentId);

    // Aplica a classe global para a fonte de dislexia com base na configuração do agente
    useEffect(() => {
        if (!isLoggedIn) return; // Só aplica se estiver logado
        const useFont = activeAgent?.customization?.useOpenDyslexicFont;
        document.body.classList.toggle('opendyslexic', !!useFont);
        return () => {
            document.body.classList.remove('opendyslexic');
        };
    }, [isLoggedIn, activeAgent?.customization?.useOpenDyslexicFont]);

    // --- CRUD de Agentes (agora simulando chamadas de API) ---
    const handleAddAgent = () => {
        if (agents.length >= 15) {
            alert("Limite de 15 agentes atingido.");
            return;
        }
        console.log("Simulando: POST /api/agents");
        const newAgent: AgentData = {
            id: Date.now(),
            ...JSON.parse(JSON.stringify(initialAgentData)), // Deep copy
            lastModified: new Date().toISOString()
        };
        const newAgents = [...agents, newAgent];
        setAgents(newAgents);
        // Em uma aplicação real, o ID viria da resposta da API
        setActiveAgentId(newAgent.id);
        // Mock: salva no local storage até o backend estar pronto
        localStorage.setItem('beyondersAgents', JSON.stringify(newAgents));
    };

    const handleSelectAgent = (id: number) => {
        setActiveAgentId(id);
    };
    
    const handleDeleteAgent = (id: number) => {
        if (window.confirm("Tem certeza que deseja apagar este agente? Esta ação não pode ser desfeita.")) {
            console.log(`Simulando: DELETE /api/agents/${id}`);
            const newAgents = agents.filter(agent => agent.id !== id);
            setAgents(newAgents);
            
            if (activeAgentId === id) {
                 setActiveAgentId(newAgents.length > 0 ? newAgents[0].id : null);
            }
             // Mock: salva no local storage
            localStorage.setItem('beyondersAgents', JSON.stringify(newAgents));
        }
    };
    
    const handleUpdateAgent = useCallback((updatedAgentData: AgentData) => {
        console.log(`Simulando: PUT /api/agents/${updatedAgentData.id}`);
        const newAgents = agents.map(agent =>
            agent.id === updatedAgentData.id
                ? { ...updatedAgentData, lastModified: new Date().toISOString() }
                : agent
        );
        setAgents(newAgents);
        // Mock: salva no local storage
        localStorage.setItem('beyondersAgents', JSON.stringify(newAgents));
    }, [agents]);

    const handleBackToList = () => {
        setActiveAgentId(null);
    };

    return (
        <div className="app-container">
            <LiveToastContainer toasts={liveToasts} onRemove={removeLiveToast} />
            {isLoggedIn && <Header onShowAgents={() => setActiveAgentId(null)} onLogout={handleLogout} />}
            <main className="main-content">
                 {!isLoggedIn ? (
                    <AuthPage onLogin={handleLogin} onRegister={handleLogin} />
                ) : activeAgent ? (
                    <CharacterSheetPage 
                        key={activeAgent.id} 
                        agentData={activeAgent} 
                        onUpdate={handleUpdateAgent} 
                        onBack={handleBackToList}
                        addLiveToast={addLiveToast}
                        addLogEntry={addLogEntry}
                        logHistory={logHistory}
                        onRemoveLogEntry={removeLogEntry}
                    />
                ) : (
                    <AgentListPage 
                        agents={agents} 
                        onSelect={handleSelectAgent} 
                        onAdd={handleAddAgent} 
                        onDelete={handleDeleteAgent} 
                    />
                )}
            </main>
        </div>
    );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);