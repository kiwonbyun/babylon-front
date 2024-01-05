export const moneyFormatter = (number: number) =>
  new Intl.NumberFormat().format(number);
