import DeadlinePostsSection from '@/components/templates/PostDetail/DeadlinePostsSection';
import FirmShowingSection from '@/components/templates/PostDetail/FirmShowingSection';
import React from 'react';

async function page({ params }: { params: { id: string } }) {
  return (
    <main className="w-[90%] m-auto mt-4 flex gap-4 md:flex-col sm:flex-col">
      <FirmShowingSection id={params.id} />
      <DeadlinePostsSection id={params.id} />
    </main>
  );
}

export default page;
