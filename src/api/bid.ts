import client from './client';

export const prepareBid = ({ postId, data, accessToken }: any) =>
  client.post(`/bids/prepare/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const completeBid = ({ postId, data, accessToken }: any) =>
  client.post(`/bids/complete/${postId}`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
