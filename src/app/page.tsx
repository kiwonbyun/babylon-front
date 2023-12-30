import Carousel from '@/components/molecules/Carousel';
import { Banner } from '@/types/commonApi';

const getBanner = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/banners`, {
    cache: 'no-store',
  });

  const data = (await res.json()) as Banner[];
  return data;
};

export default async function Home() {
  const banners = await getBanner();

  return (
    <main className="overflow-hidden">
      <Carousel className="w-full" items={banners} renderKey="bannerImage" />

      {/* <div className="grid grid-cols-2">
        {banners.map((banner) => (
          <div className="relative h-80" key={banner.id}>
            <Image
              src={banner.bannerImage}
              alt="main_banner"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              placeholder="blur"
              blurDataURL={banner.base64}
            />
          </div>
        ))}
      </div> */}
      <h1>?asd</h1>
    </main>
  );
}
