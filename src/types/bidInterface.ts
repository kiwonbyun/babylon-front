import { Post } from './postsInterface';

export const enum PayMethodEnum {
  CARD = 'card',
  NAVERPAY = 'naverpay',
}

export type PrepareBidType = {
  name: string;
  phone: string;
  bidPrice: number;
};

export type CompleteBidType = {
  imp_uid: string;
  merchant_uid: string;
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
