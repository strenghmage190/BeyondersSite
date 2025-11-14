// Arquivo: MyContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { ToastData } from "./types"; // Ajuste o caminho conforme necessário

interface MyContextProps {
  addLiveToast: (toastInfo: Omit<ToastData, "id">) => void;
  addLogEntry: (logInfo: Omit<ToastData, "id">) => void;
  logHistory: ToastData[];
  onRemoveLogEntry: (id: number) => void;
  liveToasts: ToastData[];
  removeLiveToast: (id: number) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [liveToasts, setLiveToasts] = useState<ToastData[]>([]);
  const [logHistory, setLogHistory] = useState<ToastData[]>([]);

  const removeLogEntry = useCallback((id: number) => {
    setLogHistory((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addLogEntry = useCallback((logInfo: Omit<ToastData, "id">) => {
    const newLogEntry = { ...logInfo, id: Date.now() + Math.random() };
    setLogHistory((prev) => [newLogEntry, ...prev].slice(0, 15));
  }, []);

  const removeLiveToast = useCallback((id: number) => {
     setLiveToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const addLiveToast = useCallback(
    (toastInfo: Omit<ToastData, "id">) => {
      const newToast = { ...toastInfo, id: Date.now() + Math.random() };
      setLiveToasts(prev => [...prev, newToast]);
      setTimeout(() => {
        removeLiveToast(newToast.id);
      }, 5000);
    },
    [removeLiveToast]
  );

  const value: MyContextProps = {
    addLiveToast,
    addLogEntry,
    logHistory,
    onRemoveLogEntry: removeLogEntry,
    liveToasts,
    removeLiveToast,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
