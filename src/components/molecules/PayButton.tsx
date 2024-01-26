'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@components/atoms/Button/Button';
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import { toast } from 'sonner';
import { usePayMethodStore } from '@/hooks/Store/usePayMethodStore';
import { v4 as uuidv4 } from 'uuid';

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

  const onClickPayment = (formdata: FormData) => {
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

    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IMPORT_STORE_CODE as string); // 가맹점 식별코드

    const data: RequestPay = {
      pg: 'kcp.AO09C', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method, // 결제수단
      merchant_uid: `mid_${uuidv4()}`, // 주문번호
      amount: +bidPrice, // 결제금액
      company: 'BABYLON 식사권 입찰',
      name: productName, // 주문명
      buyer_name: String(name), // 구매자 이름
      buyer_tel: String(phone), // 구매자 전화번호
      buyer_email: String(userEmail), // 구매자 이메일
      m_redirect_url: 'http://localhost:3000/bid/complete', // 결제 완료 후 보낼 링크
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response: RequestPayResponse) => {
    const {
      success,
      error_msg,
      buyer_email,
      buyer_name,
      buyer_tel,
      merchant_uid,
      paid_amount,
    } = response;

    console.log({
      productId,
      buyer_email,
      buyer_name,
      buyer_tel,
      paid_amount,
      merchant_uid,
    });

    if (success) {
      // 우리서버에 결제 정보를 저장하는 로직이 들어갈 예정 .then()으로 처리
      toast.success(`${productName} 입찰에 성공했습니다.`);
      router.replace('/');
    } else {
      toast.error(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <Button formAction={onClickPayment} type="submit">
      결제하기
    </Button>
  );
}

export default PayButton;
