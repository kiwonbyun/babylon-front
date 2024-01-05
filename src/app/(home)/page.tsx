import { CardsSkeleton } from '@/components/molecules/skeletons';
import MainBanner from '@/components/organism/MainBanner';
import MainPosts from '@/components/organism/MainPosts';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <MainBanner />
      <Suspense fallback={<div>loading</div>}>
        <MainPosts />
      </Suspense>
    </main>
  );
}
