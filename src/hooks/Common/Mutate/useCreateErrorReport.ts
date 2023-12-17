import { commonApi } from '@/api';

import { useMutation } from '@tanstack/react-query';

export const useCreateErrorReport = () => {
  return useMutation({ mutationFn: commonApi.errorReport });
};
