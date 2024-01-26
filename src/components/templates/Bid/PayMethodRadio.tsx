'use client';
import React from 'react';
import CustomRadio, { RadioItem } from '../CustomRadio';
import Card from '@/components/icons/Card';
import NaverPayIcon from '@/components/icons/NaverPayIcon';
import { usePayMethodStore } from '@/hooks/Store/usePayMethodStore';
import { PayMethodEnum } from '@/types/bidInterface';

function PayMethodRadio() {
  const changeMethod = usePayMethodStore((state) => state.changeMethod);

  const handleChange = (e: RadioItem) => {
    changeMethod(e.key);
  };
  return (
    <CustomRadio
      handleChange={handleChange}
      items={[
        {
          name: '카드',
          desc: '카드 결제합니다',
          icon: <Card />,
          key: PayMethodEnum.CARD,
        },
        {
          name: '네이버페이',
          desc: '네이버페이로 결제합니다',
          icon: <NaverPayIcon />,
          key: PayMethodEnum.NAVERPAY,
        },
      ]}
    />
  );
}

export default PayMethodRadio;
