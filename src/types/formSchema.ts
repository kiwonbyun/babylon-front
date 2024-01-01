import { z } from 'zod';

export type SignupFormInputType = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
};

export const signupSchema = z
  .object({
    email: z.string().email('이메일을 입력해주세요'),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/u, {
        message: '비밀번호는 영문과 숫자를 포함해야 합니다.',
      }),
    passwordConfirm: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
    nickname: z
      .string()
      .min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });
