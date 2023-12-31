import { SignupDataType } from '@/types/authApi';
import client from './client';

export const login = (base64encoded: string) =>
  client
    .post('/auth/login/email', null, {
      headers: {
        Authorization: `Basic ${base64encoded}`,
      },
    })
    .then((res) => res.data);

export const signup = (data: SignupDataType) =>
  client.post('/auth/register/email', data).then((res) => res.data);
