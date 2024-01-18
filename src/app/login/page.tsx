import React from 'react';
import clsx from 'clsx';
import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import Google from '@/components/icons/Google';
import Kakao from '@/components/icons/Kakao';
import LoginForm from '@/components/templates/Login/LoginForm';
import SnsLoginButton from '@/components/atoms/SnsLoginButton';

const Login = () => {
  return (
    <section className={clsx('h-full')}>
      <div className="h-1/2 flex-col-box gap-6">
        <Logo />
        <LoginForm />
      </div>
      <Divider className="mx-4">or</Divider>
      <div className="flex-col-box gap-4 h-1/3">
        <SnsLoginButton
          href=""
          icon={<Kakao />}
          text="Continue with Kakao"
          className="bg-[#FEE500]"
        />
        <SnsLoginButton
          href="http://localhost:8000/auth/google"
          icon={<Google />}
          text="Continue with Google"
          className="bg-[#4285F4]"
        />
      </div>
    </section>
  );
};

export default Login;
