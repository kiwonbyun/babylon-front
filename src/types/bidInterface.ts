import { Post } from './postsInterface';

export const enum PayMethodEnum {
  CARD = 'card',
  NAVERPAY = 'naverpay',
}

export type CreateBidPayloadType = {
  name: string;
  phone: string;
  bidPrice: number;
  email: string;
  merchant_uid: string;
  imp_uid: string;
};

export type BidType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  phone: string;
  bidPrice: number;
  merchantUid: string;
  impUid: string;
  post: Post;
};
