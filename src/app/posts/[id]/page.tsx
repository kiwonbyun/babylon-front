import DeadlinePostsSection from '@/components/templates/PostDetail/DeadlinePostsSection';
import FirmShowingSection from '@/components/templates/PostDetail/FirmShowingSection';
import {getNoBlurPostDetail} from '@/lib/serverFetch';
import { Metadata } from 'next';
import React, {Suspense} from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const data = await getNoBlurPostDetail(params.id);
  return {
    title: data.title,
  };
};

async function page({ params }: { params: { id: string } }) {
  return (
    <main className="w-[90%] m-auto mt-4 flex gap-4 md:flex-col sm:flex-col sm:gap-10 md:gap-10">
        <Suspense fallback={<div>loading...</div>}>
            <FirmShowingSection id={params.id} />
        </Suspense>
      <DeadlinePostsSection id={params.id} />
    </main>
  );
}

export default page;
