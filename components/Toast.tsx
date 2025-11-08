import React, { useState } from 'react';
import { ToastData } from '../types';

interface NotificationLogItemProps {
    toast: ToastData;
    onRemove: (id: number) => void;
}

const ToastIcon: React.FC<{ type: ToastData['type'] }> = ({ type }) => {
    switch (type) {
        case 'success': return <span className="log-item-icon">✅</span>;
        case 'failure': return <span className="log-item-icon">💀</span>;
        case 'info': default: return <span className="log-item-icon">ℹ️</span>;
    }
};

export const NotificationLogItem: React.FC<NotificationLogItemProps> = ({ toast, onRemove }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { type, title, message, details } = toast;

    return (
        <div className={`log-item ${type}`}>
            <div className="log-item-header">
                <ToastIcon type={type} />
                <strong className="log-item-title">{title}</strong>
                <button onClick={() => onRemove(toast.id)} className="log-item-close-btn">&times;</button>
            </div>
            <div className="log-item-body">
                <p className="log-item-message">{message}</p>
                {details && (
                    <div className={`log-item-details ${isExpanded ? 'expanded' : ''}`}>
                        {details.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                    </div>
                )}
            </div>
            {details && (
                <div className="log-item-footer">
                     <button className="log-item-toggle" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Ocultar detalhes' : 'Ver detalhes'}
                    </button>
                </div>
            )}
        </div>
    );
};