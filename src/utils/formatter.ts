export const moneyFormatter = (number: number) =>
  new Intl.NumberFormat().format(number);

export const getDefaultImagePath = (path?: string | null) => {
  return path ?? '/default-profile.webp';
};
