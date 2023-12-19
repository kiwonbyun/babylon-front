'use client';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import ToastContainer from './ToastContainer';

export interface IToasts {
  id: number;
  content: string;
  type: 'success' | 'error';
}

interface ToastProviderProps {
  addToast: {
    success: (content: string, duration?: number) => void;
    error: (content: string, duration?: number) => void;
  };
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastProviderProps>({
  addToast: { success: () => {}, error: () => {} },
  removeToast: () => {},
});
let id = 1;

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<IToasts[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );

  const addToast = {
    success: (content: string, durations = 2000) => {
      setToasts([{ id: id++, content, type: 'success' }]);

      if (timeoutId) clearTimeout(timeoutId);
      const timeout = setTimeout(() => {
        setToasts([]);
      }, durations);
      setTimeoutId(timeout);
    },
    error: (content: string, durations = 2000) => {
      setToasts([{ id: id++, content, type: 'error' }]);

      if (timeoutId) clearTimeout(timeoutId);
      const timeout = setTimeout(() => {
        setToasts([]);
      }, durations);
      setTimeoutId(timeout);
    },
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastContext, useToast };
export default ToastProvider;
