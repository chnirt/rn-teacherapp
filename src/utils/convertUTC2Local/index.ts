export const convertUTC2Local = (date: Date) => {
  var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return newDate;
};
