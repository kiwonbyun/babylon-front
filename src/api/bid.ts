import { CreateBidPayloadType } from '@/types/bidInterface';
import client from './client';

export const createBid = ({
  postId,
  data,
  accessToken,
}: {
  postId: number;
  data: CreateBidPayloadType;
  accessToken: string;
}) => {
  return client
    .post(`/bids/${postId}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);
};
