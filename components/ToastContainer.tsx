import React from 'react';
import { ToastData } from '../types.ts';
import { NotificationLogItem } from './Toast.tsx'; // Renamed internally but file name is the same

interface NotificationLogProps {
    toasts: ToastData[];
    onRemove: (id: number) => void;
}

export const NotificationLog: React.FC<NotificationLogProps> = ({ toasts, onRemove }) => {
    return (
        <div className="notification-log">
            <h3 className="section-title">Log de Atividades</h3>
            <div className="log-list">
                {toasts.map(toast => (
                    <NotificationLogItem key={toast.id} toast={toast} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};