import React, { useState } from 'react';

interface AuthPageProps {
    onLogin: (token: string) => void;
    onRegister: (token: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onRegister }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Apenas para registro
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Limpa erros anteriores

        // Simula chamadas de API
        if (isLoginView) {
            // Lógica de login simulada
            if (email && password) {
                console.log('Fazendo login com:', email, password);
                // Simula uma chamada de API bem-sucedida
                setTimeout(() => {
                    onLogin('mock_auth_token');
                }, 500);
            } else {
                setError('Por favor, preencha todos os campos.');
            }
        } else {
            // Lógica de registro simulada
            if (username && email && password) {
                console.log('Registrando com:', username, email, password);
                // Simula uma chamada de API bem-sucedida
                setTimeout(() => {
                    onRegister('mock_auth_token_from_register');
                }, 500);
            } else {
                setError('Por favor, preencha todos os campos.');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-wrapper">
                <h1 className="title-font">{isLoginView ? 'Login' : 'Registro'}</h1>
                <p>Bem-vindo à plataforma online de Beyonders.</p>
                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLoginView && (
                        <div className="form-group">
                            <label htmlFor="username">Nome de Usuário</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Seu nome de usuário"
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    {error && <p className="auth-error">{error}</p>}
                    <button type="submit" className="auth-submit-btn">
                        {isLoginView ? 'Entrar' : 'Registrar'}
                    </button>
                </form>
                <button onClick={() => { setIsLoginView(!isLoginView); setError(''); }} className="auth-toggle-btn">
                    {isLoginView ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça login'}
                </button>
            </div>
        </div>
    );
};