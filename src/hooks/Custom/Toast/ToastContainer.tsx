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
        <div className="absolute w-full">
          {toasts.map((toast) => (
            <Toast key={toast.id} id={toast.id}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )
    : null;
};

export default ToastContainer;
