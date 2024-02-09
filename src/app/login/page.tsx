import React from 'react';
import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import Google from '@/components/icons/Google';
import Kakao from '@/components/icons/Kakao';
import LoginForm from '@/components/templates/Login/LoginForm';
import SnsLoginButton from '@/components/atoms/SnsLoginButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const Login = () => {
  return (
    <section className="h-full sm:mt-16">
      <div className="h-1/2 flex-col-box gap-6 sm:h-fit">
        <Logo />
        <LoginForm />
      </div>
      <Divider className="mx-4 sm:mt-10 sm:mb-6">or</Divider>
      <div className="flex-col-box gap-4 h-1/3 sm:h-fit">
        <SnsLoginButton
          href=""
          icon={<Kakao />}
          text="Continue with Kakao"
          className="bg-[#FEE500]"
        />
        <SnsLoginButton
          href={process.env.NEXT_PUBLIC_SERVER_URL + '/auth/google'}
          icon={<Google />}
          text="Continue with Google"
          className="bg-[#4285F4]"
        />
      </div>
    </section>
  );
};

export default Login;
