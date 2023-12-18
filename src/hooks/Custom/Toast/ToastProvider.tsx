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
  addToast: (content: string) => void;
  removeToast: (id: number) => void;
}>({
  addToast: () => {},
  removeToast: () => {},
});
let id = 1;

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toasts[]>([]);

  const addToast = useCallback(
    (content: string) => {
      setToasts([{ id: id++, content }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    },
    [setToasts]
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
