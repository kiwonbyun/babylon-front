import client from './client';

interface LikePayload {
  postId: string;
  accessToken: string;
}

export const createLike = ({ postId, accessToken }: LikePayload) =>
  client.post(
    `/users/likes/${postId}`,
    {},
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

export const deleteLike = ({ postId, accessToken }: LikePayload) =>
  client.delete(`/users/likes/${postId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
