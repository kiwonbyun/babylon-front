import { fontPoppinsEN } from '@/app/lib/fonts';
import { SERVICE_MISSION } from '@/constants/common';
import classNames from 'classnames';
import React from 'react';

interface LoginTemplateProps {
  children: React.ReactNode;
}

const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return (
    <main className="flex overflow-auto sm:flex-col h-screen">
      <figure className="w-1/2 flex-box relative bg-login bg-center bg-cover sm:h-44 sm:w-full">
        <h3
          className={classNames(
            'text-white text-lg sm:text-base text-center font-medium',
            fontPoppinsEN.className
          )}
        >
          {SERVICE_MISSION.toUpperCase()}
        </h3>
      </figure>
      <section className="w-1/2">{children}</section>
    </main>
  );
};

export default LoginTemplate;
