'use client';
import React from 'react';
import Button from '@components/atoms/Button/Button';
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import { toast } from 'sonner';
import { usePayMethodStore } from '@/hooks/Store/usePayMethodStore';
import { v4 as uuidv4 } from 'uuid';

interface RequestPay extends RequestPayParams {
  company: string;
}

function PayButton() {
  const pay_method = usePayMethodStore((state) => state.method);

  const onClickPayment = () => {
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IMPORT_STORE_CODE as string); // 가맹점 식별코드 // 환경변수

    /* 2. 결제 데이터 정의하기 */
    const data: RequestPay = {
      pg: 'kcp.AO09C', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method, // 결제수단
      merchant_uid: `mid_${uuidv4()}`, // 주문번호
      amount: 1000, // 결제금액
      company: 'BABYLON 식사권 입찰',
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: '홍길동', // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example.com', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
      m_redirect_url: 'http://localhost:3000/bid/complete', // 결제 완료 후 보낼 링크
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response: RequestPayResponse) {
    const { success, error_msg } = response;

    if (success) {
      alert('결제 성공');
    } else {
      toast.error(`결제 실패: ${error_msg}`);
    }
  }
  return (
    <Button onClick={onClickPayment} type="submit">
      결제하기
    </Button>
  );
}

export default PayButton;
