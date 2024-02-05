import client from './client';

interface LikePayload {
  postId: string;
  accessToken: string;
}

export const postLike = ({ postId, accessToken }: LikePayload) =>
  client.post(
    `/users/likes/${postId}`,
    {},
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
