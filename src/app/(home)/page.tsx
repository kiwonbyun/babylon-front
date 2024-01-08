import PartDivider from '@/components/atoms/PartDivider';
import { MainPostsSkeleton } from '@/components/molecules/skeletons';
import MainBanner from '@/components/templates/Home/MainBanner';
import MainParticipation from '@/components/templates/Home/MainParticipation';
import MainPosts from '@/components/templates/Home/MainPosts';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <MainBanner />
      <PartDivider>
        <Suspense fallback={<MainPostsSkeleton />}>
          <MainPosts />
        </Suspense>
        <MainParticipation />
      </PartDivider>
    </main>
  );
}
