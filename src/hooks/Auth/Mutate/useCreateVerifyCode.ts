import { authApi } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useCreateVerifyCode = () => {
  return useMutation({ mutationFn: authApi.sendEmailVerity });
};
