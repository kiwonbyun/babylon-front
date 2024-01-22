import { authApi } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useCreateUser = () => {
  return useMutation({ mutationFn: authApi.signup });
};
