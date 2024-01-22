'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface ToastRedirecterProps {
  message: string | null;
  type: 'success' | 'info' | 'warning' | 'error' | 'message';
  redirectPath?: string;
}

function ToastRedirecter({
  message,
  type = 'message',
  redirectPath,
}: ToastRedirecterProps) {
  useEffect(() => {
    toast[type](message);
    if (redirectPath) {
      redirect(redirectPath);
    }
  }, [message, type, redirectPath]);
  return null;
}

export default ToastRedirecter;
