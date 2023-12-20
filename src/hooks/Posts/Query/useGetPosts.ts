import { postsApi } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { postsKeys } from './keys';
import { convertMinToMS } from '@/utils/convertTimeToMS';

export const useGetPosts = () => {
  return useQuery({
    queryKey: postsKeys.getPosts(),
    queryFn: postsApi.getPosts,
    staleTime: convertMinToMS(5),
  });
};
