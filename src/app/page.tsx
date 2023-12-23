import { useGetBanners } from '@/hooks/Common/Query/useGetBanner';
import { Banner } from '@/types/commonApi';
import { convertMinToMS } from '@/utils/convertTimeToMS';

import Image from 'next/image';

export default async function Home() {
  const res = await fetch(`${process.env.SERVER_URL}/banners`, {
    next: { revalidate: convertMinToMS(10) },
  });
  const data = (await res.json()) as Banner[];

  return (
    <main>
      {data?.map((banner) => (
        <div className="relative w-full h-80" key={banner.id}>
          <Image
            src={banner.bannerImage}
            alt="main_banner"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            priority
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          />
        </div>
      ))}

      <h1>cd</h1>
      <h2>누구십니까</h2>
      <h3>안녕하세요</h3>
    </main>
  );
}
