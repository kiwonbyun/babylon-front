import React, { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import classNames from 'classnames';
import { fontPoppinsEN } from '../lib/fonts';
import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import Google from '@/components/icons/Google';
import Kakao from '@/components/icons/Kakao';
import LoginForm from '@/components/templates/LoginForm';
import { loginCheck } from '@/app/lib/serverActions';

const Login = async () => {
  const loginUser = await loginCheck();

  if (loginUser) {
    redirect('/');
  }
  return (
    <section className={classNames('h-full')}>
      <div className="h-1/2 flex-col-box gap-6">
        <Logo />
        <LoginForm />
      </div>
      <Divider className="mx-4">or</Divider>
      <div className="flex-col-box gap-4 h-1/3">
        <SnsLoginButton
          icon={<Kakao />}
          text="Continue with Kakao"
          className="bg-[#FEE500]"
        />
        <SnsLoginButton
          icon={<Google />}
          text="Continue with Google"
          className="bg-[#4285F4]"
        />
      </div>
    </section>
  );
};

const SnsLoginButton = ({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className="bg-gray100 w-60 flex rounded cursor-pointer">
      <div className={classNames('rounded-l h-10 w-12 flex-box', className)}>
        {icon}
      </div>
      <h3
        className={classNames(
          'flex items-center justify-center w-full text-slate800 font-medium',
          fontPoppinsEN.className
        )}
      >
        {text}
      </h3>
    </div>
  );
};

export default Login;
