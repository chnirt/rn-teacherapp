import {IGetFirstLastOfWeek} from './types';

function getStartOfWeek(date: Date) {
  // Copy date if provided, or use current date if not
  date = date ? new Date(+date) : new Date();
  date.setHours(0, 0, 0, 0);

  // Set date to previous Sunday
  date.setDate(date.getDate() - date.getDay());

  return date;
}

function getEndOfWeek(date: Date) {
  date = getStartOfWeek(date);
  date.setDate(date.getDate() + 6);
  return date;
}

export const firstLastDayOfWeek = ({
  weekStart = 'Sunday',
  defaultDate = new Date(),
}: IGetFirstLastOfWeek) => {
  let firstDay1 = getStartOfWeek(defaultDate);
  let lastDay1 = getEndOfWeek(defaultDate);

  const firstDay =
    weekStart === 'Monday'
      ? new Date(firstDay1.setDate(firstDay1.getDate() + 1))
      : firstDay1;
  const lastDay =
    weekStart === 'Monday'
      ? new Date(lastDay1.setDate(lastDay1.getDate() + 1))
      : lastDay1;

  return {firstDay, lastDay};
};
