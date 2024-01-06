'use client';
import React, { useEffect } from 'react';
import { loginServerAction } from '@/app/lib/serverActions';
import LabeledInput from '@components/molecules/LabeledInput';
import Button from '@components/atoms/Button/Button';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import Exclamation from '../../icons/Exclamation';

function LoginForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(loginServerAction, initialState);

  return (
    <form className="flex-col-box gap-2" action={dispatch}>
      <LabeledInput
        className="w-80"
        label="이메일"
        id="email"
        name="email"
        error={state.errors?.email}
      />

      <LabeledInput
        className="w-80"
        label="비밀번호"
        type="password"
        id="password"
        name="password"
        error={state.errors?.password}
      />

      {state?.message && (
        <p className="text-xs text-red500 flex items-center gap-1">
          <Exclamation className="h-4 w-4" />
          {state.message}
        </p>
      )}

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
  );
}

export default LoginForm;
