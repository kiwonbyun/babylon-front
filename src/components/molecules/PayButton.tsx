'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@components/atoms/Button/Button';
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import { toast } from 'sonner';
import { usePayMethodStore } from '@/hooks/Store/usePayMethodStore';
import { completeBidSA, prepareBidSA } from '@/lib/serverActions';

interface RequestPay extends RequestPayParams {
  company: string;
}

interface PayButtonProps {
  userEmail: string;
  currentPrice: number;
  productName: string;
  productId: number;
}

function PayButton({
  productId,
  productName,
  userEmail,
  currentPrice,
}: PayButtonProps) {
  const router = useRouter();

  const pay_method = usePayMethodStore((state) => state.method);

  const onClickPayment = async (formdata: FormData) => {
    if (!window.IMP) return;

    const name = formdata.get('name');
    const phone = formdata.get('phone');
    const bidPrice = formdata.get('bidPrice');

    if (!name || !phone || !bidPrice) {
      toast.error('주문자 정보를 모두 입력해주세요');
      return;
    }
    if (currentPrice >= +bidPrice) {
      toast.error('현재 입찰금액보다 높은 금액을 입력해주세요');
      return;
    }

    const preparedMerchantUid = await prepareBidSA({
      postId: productId,
      data: {
        bidPrice: Number(bidPrice),
        name: String(name),
        phone: String(phone),
      },
    });

    const { IMP } = window;
    console.log(process.env.NEXT_PUBLIC_IMPORT_STORE_CODE);
    IMP.init(process.env.NEXT_PUBLIC_IMPORT_STORE_CODE as string); // 가맹점 식별코드

    const data: RequestPay = {
      pg: 'kcp.AO09C', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method, // 결제수단
      merchant_uid: preparedMerchantUid, // 주문번호
      amount: +bidPrice, // 결제금액
      company: 'BABYLON 식사권 입찰',
      name: productName, // 주문명
      buyer_name: String(name), // 구매자 이름
      buyer_tel: String(phone), // 구매자 전화번호
      buyer_email: String(userEmail), // 구매자 이메일
      m_redirect_url: `${process.env.NEXT_PUBLIC_DOMAIN}/bid/complete/${productId}`, // 결제 완료 후 보낼 링크
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response: RequestPayResponse) => {
    const { imp_uid, success, error_msg, merchant_uid } = response;

    if (!success) {
      toast.error(`결제에 실패했습니다. ${error_msg}`);
      return;
    }

    completeBidSA({
      postId: productId,
      data: { imp_uid: String(imp_uid), merchant_uid },
    })
      .then(() => {
        toast.success(`${productName} 입찰에 성공했습니다.`);
        router.replace('/');
      })
      .catch(() => {
        toast.error('입찰에 실패했습니다. 고객센터로 문의해주세요.');
      });
  };

  return (
    <Button formAction={onClickPayment} type="submit">
      결제하기
    </Button>
  );
}

export default PayButton;
