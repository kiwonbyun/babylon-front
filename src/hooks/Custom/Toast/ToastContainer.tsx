import Toast from '@/components/atoms/Toast';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IToasts } from './ToastProvider';

const ToastContainer = ({ toasts }: { toasts: IToasts[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient
    ? createPortal(
        <div>
          {toasts.map((toast) => (
            <Toast key={toast.id} type={toast.type}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )
    : null;
};

export default ToastContainer;
