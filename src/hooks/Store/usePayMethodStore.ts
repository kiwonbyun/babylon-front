import { PayMethodEnum } from '@/types/bidInterface';
import { create } from 'zustand';

type State = {
  method: PayMethodEnum;
};
type Action = {
  changeMethod: (method: PayMethodEnum) => void;
};

export const usePayMethodStore = create<State & Action>((set) => ({
  method: PayMethodEnum.CARD,
  changeMethod: (method: PayMethodEnum) => set(() => ({ method })),
}));
