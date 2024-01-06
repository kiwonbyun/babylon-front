import { z } from 'zod';

export type SignupFormInputType = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  code: string;
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

export type ErrorReportFormInputType = {
  name: string | null;
  email: string | null;
  content: string | null;
};

export const errorReportSchema = z.object({
  name: z
    .string({
      required_error: '이름을 입력해주세요.',
      invalid_type_error: '이름을 입력해주세요.',
    })
    .min(1, { message: '이름을 입력해주세요.' }),
  email: z
    .string({
      required_error: '이메일을 입력해주세요.',
      invalid_type_error: '이메일을 입력해주세요.',
    })
    .email({ message: '이메일 형식이 아닙니다.' }),
  content: z
    .string({
      required_error: '내용을 입력해주세요.',
      invalid_type_error: '내용을 입력해주세요.',
    })
    .min(1, { message: '내용을 입력해주세요.' }),
});
