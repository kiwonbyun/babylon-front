import LoginTemplate from '@/components/templates/LoginTemplate';
import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <LoginTemplate>{children}</LoginTemplate>;
};

export default LoginLayout;
