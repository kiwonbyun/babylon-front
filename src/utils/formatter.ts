import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const moneyFormatter = (number: number) =>
  new Intl.NumberFormat().format(number);

export const getDefaultImagePath = (path?: string | null | StaticImport) => {
  return path ?? '/default-profile.webp';
};
