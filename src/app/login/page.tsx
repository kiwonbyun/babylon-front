import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import Google from '@/components/icons/Google';
import Kakao from '@/components/icons/Kakao';
import LabeledInput from '@/components/molecules/LabeledInput';
import { loginCheck, loginServerAction } from '@/utils/serverActions';
import classNames from 'classnames';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { fontPoppinsEN } from '../fonts';

const Login = async () => {
  const loginUser = await loginCheck();

  if (loginUser) {
    throw new Error('이미 로그인 되어있습니다.');
  }
  return (
    <section className={classNames('h-full')}>
      <div className="h-1/2 flex-col-box gap-6">
        <Logo />
        <form className="flex-col-box gap-2" action={loginServerAction}>
          <LabeledInput
            className="w-64"
            label="이메일"
            id="email"
            name="email"
          />
          <LabeledInput
            className="w-64"
            label="비밀번호"
            type="password"
            id="password"
            name="password"
          />
          <div className="flex-col-box gap-2 mt-3">
            <Button
              type="submit"
              className="text-white w-64 disabled:bg-gray200 bg-red600"
            >
              로그인
            </Button>
            <Link href={'/login/signup'}>
              <Button className="w-64 bg-gray100">회원가입</Button>
            </Link>
          </div>
        </form>
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
