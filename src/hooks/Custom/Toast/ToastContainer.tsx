import Toast from '@/components/atoms/Toast';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Toasts {
  id: number;
  content: string;
}

const ToastContainer = ({ toasts }: { toasts: Toasts[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient
    ? createPortal(
        <div>
          {toasts.map((toast) => (
            <Toast key={toast.id}>{toast.content}</Toast>
          ))}
        </div>,
        document.body
      )
    : null;
};

export default ToastContainer;
