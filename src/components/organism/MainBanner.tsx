import React from 'react';
import Carousel from '../molecules/Carousel';
import { Banner } from '@/types/commonInterface';

const getBanner = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/banners`, {
    next: { revalidate: 60 * 60 * 4 }, // 4시간마다 재검증
  });

  const data = (await res.json()) as Banner[];
  return data;
};

export default async function MainBanner() {
  const banners = await getBanner();
  return (
    <Carousel className="w-full" items={banners} renderKey="bannerImage" />
  );
}
