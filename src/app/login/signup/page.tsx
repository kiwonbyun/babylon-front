import React from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import Logo from '@/components/atoms/Logo';
import LabeledInput from '@/components/molecules/LabeledInput';

function SignUp() {
  return (
    <section className="h-full">
      <div className="flex-col-box gap-6 mt-10">
        <Logo />
        <form className="flex flex-col gap-2 w-full items-center">
          <LabeledInput
            className="w-80"
            label="이메일"
            id="email"
            name="email"
          />
          <LabeledInput
            className="w-80"
            label="비밀번호"
            type="password"
            id="password"
            name="password"
            desc="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
          />
          <LabeledInput
            className="w-80"
            label="비밀번호 확인"
            type="password"
            id="password-confirm"
            name="password-confirm"
          />
          <LabeledInput
            className="w-80"
            label="닉네임"
            id="nickname"
            name="nickname"
          />
          <div className="flex-col-box gap-2 mt-3">
            <Button
              type="submit"
              className="text-white w-80 disabled:bg-gray200 bg-red600"
            >
              로그인
            </Button>
            <Link href={'/login/signup'}>
              <Button className="w-80 bg-gray100">회원가입</Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
