'use client';

import { useGetPosts } from '@/hooks/Posts/Query/useGetPosts';

function Posts() {
  const { data } = useGetPosts();

  return (
    <div>
      <section>
        <p>{data?.[0].title}</p>
      </section>
    </div>
  );
}

export default Posts;
