import LoginTemplate from '@/components/templates/Login/LoginTemplate';
import { loginCheck } from '@/lib/serverActions';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  const loginUser = await loginCheck();

  if (loginUser) {
    redirect('/');
  }
  return <LoginTemplate>{children}</LoginTemplate>;
};

export default LoginLayout;
