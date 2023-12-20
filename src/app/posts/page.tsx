'use client';

import { useToast } from '@/hooks/Custom/Toast/ToastProvider';
import { useGetPosts } from '@/hooks/Posts/Query/useGetPosts';

function Posts() {
  const { addToast } = useToast();
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
