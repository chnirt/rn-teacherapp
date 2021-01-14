export const convertDDMM = (date: Date) => {
  let newDate = new Date(date);
  return `${newDate.getDate()}-${newDate.getMonth() + 1}`;
};
