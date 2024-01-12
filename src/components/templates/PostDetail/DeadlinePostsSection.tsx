import { getPosts } from '@/lib/serverFetch';
import React from 'react';
import DeadlinePostsList from './DeadlinePostsList';

async function DeadlinePostsSection({ id }: { id: string }) {
  const posts = await getPosts('?auctionEndDateTime=ASC');
  const filteredPosts = posts.filter((post) => post.id !== +id);

  return (
    <section className="lg:w-[35%] lg:h-screen lg:overflow-y-auto md:w-full sm:w-full">
      <h1 className="font-semibold text-lg mb-3">곧 마감되는 미팅</h1>
      <DeadlinePostsList items={filteredPosts} />
    </section>
  );
}

export default DeadlinePostsSection;
