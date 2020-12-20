import {convertUTC2Local} from '../convertUTC2Local';

// Returns an array of dates between the two dates
export const datesFromFirst2Last = (startDate: Date, endDate: Date) => {
  const dates = [];

  // Strip hours minutes seconds etc.
  let currentDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );

  while (currentDate <= endDate) {
    dates.push(convertUTC2Local(currentDate));

    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1, // Will increase month if over range
    );
  }

  // console.log(dates);

  return dates;
};
