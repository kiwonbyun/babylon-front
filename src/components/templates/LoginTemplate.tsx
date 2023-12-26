import { SERVICE_MISSION } from '@/constants/common';
import React from 'react';

interface LoginTemplateProps {
  children: React.ReactNode;
}

const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return (
    <main className="flex h-screen overflow-auto sm:flex-col">
      <figure className="w-1/2 flex-box relative bg-login bg-center bg-cover sm:h-44 sm:w-full">
        <h3 className="text-white text-lg sm:text-base text-center font-semibold">
          {SERVICE_MISSION.toUpperCase()}
        </h3>
      </figure>
      <section className="w-1/2">{children}</section>
    </main>
  );
};

export default LoginTemplate;
