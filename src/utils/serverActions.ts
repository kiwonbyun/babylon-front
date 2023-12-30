'use server';

import { login } from '@/api/auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';

async function decodeJwt(jwt: string | undefined) {
  if (!jwt) return null;
  const decoded = jwtDecode(jwt);
  return decoded;
}

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function loginServerAction(formData: FormData) {
  const rawFormData = loginSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  const { email, password } = rawFormData;
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

  if (res.accessToken) {
    redirect('/');
  }
}

export const loginCheck = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const result = await decodeJwt(accessToken);
  return result;
};
