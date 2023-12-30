import client from './client';

export const login = (base64encoded: string) =>
  client
    .post('/auth/login/email', null, {
      headers: {
        Authorization: `Basic ${base64encoded}`,
      },
    })
    .then((res) => res.data);
