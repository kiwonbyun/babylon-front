import { SignupDataType } from '@/types/authInterface';
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

export const sendEmailVerity = (email: string) =>
  client.post('/auth/verify/email', { email }).then((res) => res.data);

export const confirmEmailVerify = ({
  email,
  code,
}: {
  email: string;
  code: string;
}) =>
  client.post('/auth/confirm/email', { email, code }).then((res) => res.data);

export const updateUser = ({
  id,
  data,
  accessToken,
}: {
  id: number;
  data: any;
  accessToken: string;
}) => {
  return client
    .put(`/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);
};

export const deleteProfileImage = ({
  id,
  accessToken,
}: {
  id: number;
  accessToken: string;
}) => {
  return client.delete(`/users/profile-image/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getUser = (id: number) => {
  return client.get(`/users/${id}`).then((res) => res.data);
};
