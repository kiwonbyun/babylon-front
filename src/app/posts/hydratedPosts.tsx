import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '../getQueryClient';
import { postsApi } from '@/api';
import Posts from './page';
import { postsKeys } from '@/hooks/Posts/Query/keys';

export default async function HydratedPosts() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: postsKeys.getPosts(),
    queryFn: postsApi.getPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Posts />
    </Hydrate>
  );
}
