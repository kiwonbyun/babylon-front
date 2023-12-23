import { Banner } from '@/types/commonApi';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

const getBanner = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/banners`, {
    cache: 'no-store',
  });

  const data = (await res.json()) as Banner[];

  const images_data = await Promise.all(
    data.slice(0, 6).map(async (item) => {
      const buffer = await fetch(item.bannerImage).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer);
      return {
        ...item,
        base64: base64,
      };
    })
  ).then((value) => value);

  return images_data;
};

export default async function Home() {
  const banners = await getBanner();

  return (
    <main>
      <div className="grid grid-cols-2">
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
      </div>
      <h1>?asd</h1>
    </main>
  );
}
