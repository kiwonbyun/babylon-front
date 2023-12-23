import { useQuery } from '@tanstack/react-query';
import { commonKeys } from './keys';
import { commonApi } from '@/api';
import { Banner, CustomError } from '@/types/commonApi';
import { dynamicBlurDataUrl } from '@/utils/dynamicBlurDataUrl';

export const useGetBanners = () => {
  return useQuery<Banner[], CustomError>({
    queryKey: commonKeys.getBanners(),
    queryFn: commonApi.getBanner,
  });
};
