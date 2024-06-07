import PartDivider from '@/components/atoms/PartDivider';
import { MainPostsSkeleton } from '@/components/molecules/skeletons';
import MainParticipation from '@/components/templates/Home/MainParticipation';
import MainPosts from '@/components/templates/Home/MainPosts';
import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: 'HOME',
};

const DynamicMainPosts = dynamic(()=>import('@/components/templates/Home/MainPosts'),{
    loading:()=><MainPostsSkeleton />
})

export default async function Home() {
  return (
    <main>
      <PartDivider>
        <Suspense fallback={<MainPostsSkeleton />}>
            <DynamicMainPosts />
        </Suspense>
        <MainParticipation />
      </PartDivider>
    </main>
  );
}
