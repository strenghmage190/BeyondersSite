import React from 'react';
import { ToastData } from '../types';

interface LiveToastProps {
    toast: ToastData;
    onRemove: (id: number) => void;
}

const LiveToast: React.FC<LiveToastProps> = ({ toast, onRemove }) => {
    const getIcon = (type: ToastData['type']) => {
        switch (type) {
            case 'success': return '✅';
            case 'failure': return '💀';
            case 'info': default: return 'ℹ️';
        }
    };

    return (
        <div className={`live-toast ${toast.type}`}>
            <span className="live-toast-icon">{getIcon(toast.type)}</span>
            <div className="live-toast-content">
                <strong className="live-toast-title">{toast.title}</strong>
                <p className="live-toast-message">{toast.message}</p>
            </div>
            <button onClick={() => onRemove(toast.id)} className="live-toast-close">&times;</button>
        </div>
    );
};

interface LiveToastContainerProps {
    toasts: ToastData[];
    onRemove: (id: number) => void;
}

export const LiveToastContainer: React.FC<LiveToastContainerProps> = ({ toasts, onRemove }) => {
    return (
        <div className="live-toast-container">
            {toasts.map(toast => (
                <LiveToast key={toast.id} toast={toast} onRemove={onRemove} />
            ))}
        </div>
    );
};