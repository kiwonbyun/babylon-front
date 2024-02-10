'use server';

import { login, signup, updateUser } from '@/api/auth';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';
import { RolesEnum, TokenUser } from '@/types/authInterface';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { CustomAxiosError } from '@/types/commonInterface';
import { AxiosError } from 'axios';
import { completeBid, prepareBid } from '@/api/bid';
import { CompleteBidType, PrepareBidType } from '@/types/bidInterface';
import { errorReport } from '@/api/common';
import { postLike } from '@/api/users';

async function decodeJwt(jwt: string | undefined) {
  if (!jwt) return null;
  const decoded: TokenUser = jwtDecode(jwt);
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
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    return {
      message: error?.response?.data.message ?? '서버 오류가 발생했습니다.',
    };
  }
}

export const logoutServerAction = async () => {
  try {
    cookies().delete('accessToken');
    cookies().delete('refreshToken');
  } catch (e) {
    throw new Error('쿠키 에러 발생');
  }
  redirect('/');
};

const errorReportSchema = z.object({
  name: z.string().refine((value) => value.replace(/\s/g, '').length >= 2, {
    message: '이름은 최소 2자 이상입니다.',
  }),
  email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
  content: z.string().refine((value) => value.replace(/\s/g, '').length >= 1, {
    message: '내용을 입력해주세요',
  }),
});

export async function errorReportSA(prevState: State, formData: FormData) {
  const validatedFields = errorReportSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '',
    };
  }
  const { email, content, name } = validatedFields.data;

  try {
    await errorReport({ name, email, content });
    return { message: '요청이 성공했습니다.' };
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    return {
      message: error.response?.data.message ?? '서버 오류가 발생했습니다.',
    };
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
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    return {
      message: error.response?.data.message ?? '서버 오류가 발생했습니다.',
    };
  }
};

export const saveTokenServerAction = async (
  accessToken: string,
  refreshToken?: string
) => {
  cookies().set('accessToken', accessToken, {
    maxAge: 60 * 60 * 24 * 1, // 1 day
    httpOnly: true,
  });
  if (refreshToken) {
    cookies().set('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
    });
  }

  return { message: 'success' };
};

const getAccessToken = () => {
  return cookies().get('accessToken')?.value ?? '';
};

export const updateUserSA = async (id: number, data: FormData) => {
  try {
    await updateUser({
      id,
      data,
      accessToken: getAccessToken(),
    });
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    throw new Error(
      error.response?.data.message ?? '서버 오류가 발생했습니다.'
    );
  }
  revalidatePath('/mypage');
  redirect('/mypage');
};

export const prepareBidSA = async ({
  postId,
  data,
}: {
  postId: number;
  data: PrepareBidType;
}) => {
  try {
    const result = await prepareBid({
      postId,
      data,
      accessToken: getAccessToken(),
    });
    return result.data;
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    throw new Error(
      error.response?.data.message ?? '서버 오류가 발생했습니다.'
    );
  }
};

export const completeBidSA = async ({
  postId,
  data,
}: {
  postId: number;
  data: CompleteBidType;
}) => {
  try {
    await completeBid({ postId, data, accessToken: getAccessToken() });
  } catch (err) {
    const error = err as AxiosError<CustomAxiosError>;
    throw new Error(
      error.response?.data.message ?? '서버 오류가 발생했습니다.'
    );
  }
  revalidatePath(`/bid/${postId}`);
};

export const postLikeSA = async ({ postId }: { postId: string }) => {
  try {
    await postLike({ postId, accessToken: getAccessToken() });
  } catch (e) {
    const error = e as AxiosError<CustomAxiosError>;
    throw new Error(
      error.response?.data.message ?? '서버 오류가 발생했습니다.'
    );
  }
  revalidateTag('like');
};
