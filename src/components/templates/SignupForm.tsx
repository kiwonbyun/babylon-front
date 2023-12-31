'use client';
import React from 'react';
import LabeledInput from '@components/molecules/LabeledInput';
import Button from '@components/atoms/Button/Button';
import { signupServerAction } from '@/utils/serverActions';
import { useFormState } from 'react-dom';
import Exclamation from '../icons/Exclamation';

function SignupForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(signupServerAction, initialState);
  console.log(state);
  return (
    <form className="flex flex-col gap-2 w-full items-center" action={dispatch}>
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
        desc="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
        error={state.errors?.password}
      />
      <LabeledInput
        className="w-80"
        label="비밀번호 확인"
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        error={state.errors?.passwordConfirm}
      />
      <LabeledInput
        className="w-80"
        label="닉네임"
        id="nickname"
        name="nickname"
        desc="다른 유저와 겹치지 않도록 입력해주세요."
        error={state.errors?.nickname}
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
          회원가입
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
