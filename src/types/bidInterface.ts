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
};
