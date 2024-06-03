import PartDivider from '@/components/atoms/PartDivider';
import { MainPostsSkeleton } from '@/components/molecules/skeletons';
import MainParticipation from '@/components/templates/Home/MainParticipation';
import MainPosts from '@/components/templates/Home/MainPosts';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'HOME',
};

export default async function Home() {
  return (
    <main>
        home test
      <PartDivider>
        <Suspense fallback={<MainPostsSkeleton />}>
          <MainPosts />
        </Suspense>
        <MainParticipation />
      </PartDivider>
    </main>
  );
}
