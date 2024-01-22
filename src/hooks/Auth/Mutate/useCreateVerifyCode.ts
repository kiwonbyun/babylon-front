import { authApi } from '@/api';
import { CustomError } from '@/types/commonInterface';
import { useMutation } from '@tanstack/react-query';

export const useCreateVerifyCode = () => {
  return useMutation({
    mutationFn: authApi.sendEmailVerity,
  });
};
