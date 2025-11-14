import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient'; // Importa nosso cliente Supabase

export const AuthPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="title-font">Beyonders</h2>
                <p>Faça login ou crie sua conta para continuar</p>
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={['github', 'google']} // Opcional: Adiciona login social
                    theme="dark"
                />
            </div>
        </div>
    );
};
