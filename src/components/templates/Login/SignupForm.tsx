'use client';
import React, { KeyboardEvent, useState } from 'react';
import LabeledInput from '@components/molecules/LabeledInput';
import Button from '@components/atoms/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupFormInputType, signupSchema } from '@/types/formSchema';

import { RolesEnum } from '@/types/authInterface';
import { useCreateUser } from '@/hooks/Auth/Mutate/useCreateUser';
import { saveTokenServerAction } from '@/lib/serverActions';
import { CustomError } from '@/types/commonInterface';
import { EMAIL_REGEX } from '@/constants/common';
import { useCreateVerifyCode } from '@/hooks/Auth/Mutate/useCreateVerifyCode';
import { useConfirmVerifyCode } from '@/hooks/Auth/Mutate/useConfirmVerifyCode';
import { toast } from 'sonner';

function SignupForm() {
  const [isVerified, setIsVerified] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const { mutateAsync: sendCode } = useCreateVerifyCode();
  const { mutateAsync: confirmCode } = useConfirmVerifyCode();
  const { mutateAsync: createUser } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
      .then((res) => {
        saveTokenServerAction(res.accessToken, res.refreshToken);
        toast.success('회원가입이 완료되었습니다.');
      })
      .catch((err: CustomError) => toast.error(err.response?.data.message));
  };
  const email = watch('email');
  const code = watch('code');
  const isEmail = EMAIL_REGEX.test(email);

  const handleSendVerify = () => {
    if (!isEmail) return toast.error('이메일 형식이 올바르지 않습니다.');
    toast.promise(sendCode(email), {
      loading: '인증코드 전송중...',
      success: () => {
        setShowVerifyCode(true);
        return '인증코드가 전송되었습니다.';
      },
      error: (err) => err.response?.data.message,
    });
  };
  const handleConfirmVerify = () => {
    toast.promise(confirmCode({ email, code }), {
      success: () => {
        setIsVerified(true);
        return '인증코드가 확인되었습니다.';
      },
      error: (err) => err.response?.data.message,
    });
  };

  const handleEnterEmailVerify = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    handleSendVerify();
  };

  const handleEnterCodeVerify = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    handleConfirmVerify();
  };

  return (
    <form
      className="flex flex-col gap-2 w-full items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <LabeledInput
          className="w-80"
          label="이메일"
          id="email"
          {...register('email')}
          error={errors?.email?.message}
          disabled={showVerifyCode || isVerified}
          onKeyUp={handleEnterEmailVerify}
        />
        {showVerifyCode && (
          <LabeledInput
            label="인증코드"
            id="code"
            desc="이메일로 전송된 인증코드를 입력해주세요"
            {...register('code')}
            disabled={isVerified}
            onKeyUp={handleEnterCodeVerify}
          />
        )}
        {showVerifyCode ? (
          <Button
            className="bg-pink500 w-80 text-white disabled:bg-pink200 disabled:text-black"
            onClick={handleConfirmVerify}
            disabled={isVerified}
          >
            인증코드 확인
          </Button>
        ) : (
          <Button
            className="bg-red600 w-80 text-white disabled:bg-gray200 disabled:text-black"
            onClick={handleSendVerify}
            disabled={!isEmail}
          >
            이메일 인증하기
          </Button>
        )}
      </div>
      <LabeledInput
        className="w-80"
        label="비밀번호"
        type="password"
        id="password"
        {...register('password')}
        desc="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
        error={errors?.password?.message}
        disabled={!isVerified}
      />
      <LabeledInput
        className="w-80"
        label="비밀번호 확인"
        type="password"
        id="passwordConfirm"
        {...register('passwordConfirm')}
        error={errors?.passwordConfirm?.message}
        disabled={!isVerified}
      />
      <LabeledInput
        className="w-80"
        label="닉네임"
        id="nickname"
        {...register('nickname')}
        desc="다른 유저와 겹치지 않도록 입력해주세요."
        error={errors?.nickname?.message}
        disabled={!isVerified}
      />

      <Button
        type="submit"
        className="text-white w-80 disabled:bg-gray200 bg-red600"
        disabled={!isVerified}
      >
        회원가입
      </Button>
    </form>
  );
}

export default SignupForm;
