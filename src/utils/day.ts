import dayjs from 'dayjs';

export const today = dayjs().format('YYYY-MM-DDTHH:mm:ss');

export const getDday = (date: string) => {
  const today = dayjs().format('YYYY-MM-DD');
  const dday = dayjs(date).format('YYYY-MM-DD');
  const diff = dayjs(dday).diff(today, 'day');
  return diff;
};
