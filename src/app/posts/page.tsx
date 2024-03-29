import GridPosts from '@/components/templates/Home/GridPosts';
import { getPosts } from '../../lib/serverFetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
};

async function Posts() {
  const posts = await getPosts();

  if (!posts.length) {
    return null;
  }

  return (
    <div className="w-[90%] mx-auto pt-4">
      <GridPosts items={posts} />
    </div>
  );
}

export default Posts;
