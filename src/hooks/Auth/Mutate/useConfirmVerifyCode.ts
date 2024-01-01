import { authApi } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useConfirmVerifyCode = () => {
  return useMutation({
    mutationFn: authApi.confirmEmailVerify,
  });
};
