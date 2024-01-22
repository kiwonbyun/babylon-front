import ToastRedirecter from '@/components/atoms/ToastRedirecter';
import LoginTemplate from '@/components/templates/Login/LoginTemplate';
import { loginCheck } from '@/lib/serverActions';
import React from 'react';

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  const loginUser = await loginCheck();

  if (loginUser) {
    return (
      <ToastRedirecter
        message={`${loginUser.nickname}님 환영합니다`}
        type="success"
        redirectPath="/"
      />
    );
  }
  return <LoginTemplate>{children}</LoginTemplate>;
};

export default LoginLayout;
