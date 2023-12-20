const validateNumberArgument = (arg: number, argName: string) => {
  if (typeof arg !== 'number' || Number.isNaN(arg)) {
    throw new Error(`${argName} should be a valid number.`);
  }
};

function convertMinToMS(minutes: number) {
  validateNumberArgument(minutes, 'minutes');
  return minutes * 60 * 1000;
}

function convertHourToMS(hours: number) {
  validateNumberArgument(hours, 'hours');
  return hours * 60 * convertMinToMS(1);
}

function convertDayToMS(days: number) {
  validateNumberArgument(days, 'days');
  return days * 24 * convertHourToMS(1);
}

export { convertDayToMS, convertHourToMS, convertMinToMS };
