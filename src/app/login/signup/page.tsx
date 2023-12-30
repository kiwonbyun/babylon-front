import React from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import Logo from '@/components/atoms/Logo';
import LabeledInput from '@/components/molecules/LabeledInput';

function SignUp() {
  return (
    <section className="h-full">
      <div className="h-1/2 flex-col-box gap-6">
        <Logo />
        <form className="flex-col-box gap-2">
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
    </section>
  );
}

export default SignUp;
