import { MainPostsSkeleton } from '@/components/molecules/skeletons';
import MainBanner from '@/components/templates/Home/MainBanner';
import MainPosts from '@/components/templates/Home/MainPosts';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <MainBanner />
      <Suspense fallback={<MainPostsSkeleton />}>
        <MainPosts />
      </Suspense>
    </main>
  );
}
