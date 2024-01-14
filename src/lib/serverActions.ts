'use server';

import { login, signup } from '@/api/auth';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';
import { RolesEnum, User } from '@/types/authInterface';

async function decodeJwt(jwt: string | undefined) {
  if (!jwt) return null;
  const decoded: User = jwtDecode(jwt);
  return decoded;
}

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message: string | null;
};

const loginSchema = z.object({
  email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/u, {
      message: '비밀번호는 영문과 숫자를 포함해야 합니다.',
    }),
});

export async function loginServerAction(prevState: State, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '',
    };
  }
  const { email, password } = validatedFields.data;

  try {
    const base64encoded = btoa(`${email}:${password}`);
    const res = await login(base64encoded);

    cookies().set('accessToken', res.accessToken, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      httpOnly: true,
    });
    cookies().set('refreshToken', res.refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
    });
    return { message: 'success' };
  } catch (err: any) {
    return { message: err.response.data.message };
  }
}

export const loginCheck = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const result = await decodeJwt(accessToken);
  return result;
};

const signupSchema = z
  .object({
    email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/u, {
        message: '비밀번호는 영문과 숫자를 포함해야 합니다.',
      }),
    passwordConfirm: z.string(),
    nickname: z
      .string()
      .min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export const signupServerAction = async (
  prevState: State,
  formData: FormData
) => {
  const validatedFields = signupSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
    nickname: formData.get('nickname'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '',
    };
  }
  const { email, password, nickname } = validatedFields.data;

  const payload = {
    email,
    password,
    nickname,
    role: RolesEnum.USER,
  };
  try {
    const res = await signup(payload);

    cookies().set('accessToken', res.accessToken, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      httpOnly: true,
    });
    cookies().set('refreshToken', res.refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
    });
    return { message: 'success' };
  } catch (err: any) {
    return { message: err.response.data.message };
  }
};

export const saveTokenServerAction = async (
  accessToken: string,
  refreshToken: string
) => {
  cookies().set('accessToken', accessToken, {
    maxAge: 60 * 60 * 24 * 1, // 1 day
    httpOnly: true,
  });
  cookies().set('refreshToken', refreshToken, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  });
  return { message: 'success' };
};
