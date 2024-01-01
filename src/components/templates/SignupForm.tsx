'use client';
import React from 'react';
import LabeledInput from '@components/molecules/LabeledInput';
import Button from '@components/atoms/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupFormInputType, signupSchema } from '@/types/formSchema';

import { RolesEnum } from '@/types/authApi';
import { useCreateUser } from '@/hooks/Auth/Mutate/useCreateUser';
import { saveTokenServerAction } from '@/utils/serverActions';
import { CustomError } from '@/types/commonApi';

function SignupForm() {
  const { mutateAsync: createUser } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
      role: RolesEnum.USER,
    };
    createUser(payload)
      .then((res) => saveTokenServerAction(res.accessToken, res.refreshToken))
      .catch((err: CustomError) => console.log(err.response?.data.message));
  };
  return (
    <form
      className="flex flex-col gap-2 w-full items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabeledInput
        className="w-80"
        label="이메일"
        id="email"
        {...register('email')}
        error={errors?.email?.message}
      />
      <LabeledInput
        className="w-80"
        label="비밀번호"
        type="password"
        id="password"
        {...register('password')}
        desc="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
        error={errors?.password?.message}
      />
      <LabeledInput
        className="w-80"
        label="비밀번호 확인"
        type="password"
        id="passwordConfirm"
        {...register('passwordConfirm')}
        error={errors?.passwordConfirm?.message}
      />
      <LabeledInput
        className="w-80"
        label="닉네임"
        id="nickname"
        {...register('nickname')}
        desc="다른 유저와 겹치지 않도록 입력해주세요."
        error={errors?.nickname?.message}
      />

      <Button
        type="submit"
        className="text-white w-80 disabled:bg-gray200 bg-red600"
      >
        회원가입
      </Button>
    </form>
  );
}

export default SignupForm;
