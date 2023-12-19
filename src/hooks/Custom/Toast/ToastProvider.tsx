'use client';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import ToastContainer from './ToastContainer';

interface Toasts {
  id: number;
  content: string;
}

const ToastContext = createContext<{
  addToast: (content: string, duration?: number) => void;
  removeToast: (id: number) => void;
}>({
  addToast: () => {},
  removeToast: () => {},
});
let id = 1;

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toasts[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );

  const addToast = useCallback(
    (content: string, durations = 2000) => {
      setToasts([{ id: id++, content }]);

      if (timeoutId) clearTimeout(timeoutId);
      const timeout = setTimeout(() => {
        setToasts([]);
      }, durations);
      setTimeoutId(timeout);
    },
    [setToasts, timeoutId]
  );

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
