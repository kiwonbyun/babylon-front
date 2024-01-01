import { authApi } from '@/api';
import { CustomError } from '@/types/commonApi';
import { useMutation } from '@tanstack/react-query';

export const useCreateUser = () => {
  return useMutation({ mutationFn: authApi.signup });
};
