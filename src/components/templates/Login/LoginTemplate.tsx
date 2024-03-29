import { fontPoppinsEN } from '@/lib/fonts';
import { SERVICE_MISSION } from '@/constants/common';
import clsx from 'clsx';
import React from 'react';

interface LoginTemplateProps {
  children: React.ReactNode;
}

const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return (
    <main className="flex overflow-auto sm:flex-col h-screen">
      <figure className="w-1/2 flex-box relative bg-login bg-center bg-cover sm:h-40 sm:w-full">
        <h3
          className={clsx(
            'text-white text-lg sm:text-base text-center font-medium',
            fontPoppinsEN.className
          )}
        >
          {SERVICE_MISSION.toUpperCase()}
        </h3>
      </figure>
      <section className="w-1/2 sm:w-full">{children}</section>
    </main>
  );
};

export default LoginTemplate;
