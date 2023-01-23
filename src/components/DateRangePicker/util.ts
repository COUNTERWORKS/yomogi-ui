import { lastDayOfMonth, startOfMonth, isSameDay, isAfter, isBefore } from 'date-fns';
import { format } from 'date-fns';
import { CellType } from './types';

export const getDaysInMonth = (date: Date): Array<Partial<number>> => {
  const lastDate = lastDayOfMonth(date).getDate();
  const startDay = startOfMonth(date).getDay();

  const dates = Array(lastDate)
    .fill(null)
    .map((_, index: number) => index + 1);
  const emptyArray = Array(startDay).fill(null);

  return [...emptyArray, ...dates];
};

export const getCellType = (dates: { startDate: string; endDate: string }, date: Date): CellType => {
  const startDate = isValidDateFormat(dates.startDate) ? toDate(dates.startDate) : '';
  const endDate = isValidDateFormat(dates.endDate) ? toDate(dates.endDate) : '';

  if (!endDate && !startDate) {
    return 'default';
  }

  if (endDate && startDate) {
    if (isSameDay(endDate, startDate) && isSameDay(startDate, date)) {
      return 'single';
    }

    if (isSameDay(startDate, date)) {
      return 'start';
    }

    if (isSameDay(endDate, date)) {
      return 'end';
    }

    if (isAfter(endDate, date) && isBefore(startDate, date)) {
      return 'middle';
    }
  } else {
    if (startDate && isSameDay(startDate, date)) {
      return 'start';
    }

    if (endDate && isSameDay(endDate, date)) {
      return 'end';
    }
  }

  return 'default';
};

// 選択期間に利用不可日がないかを調べる関数
export const hasUnavailableDatesInSelectedDates = ({
  unavailableDates,
  startDate,
  endDate,
}: {
  unavailableDates: string[];
  startDate: string;
  endDate: string;
}): boolean => {
  const date = unavailableDates.find(
    (date) => !isBefore(new Date(date), toDate(startDate)) && !isAfter(new Date(date), toDate(endDate))
  );

  return Boolean(date);
};

export const isDisabled = ({
  unavailableDates,
  startDate,
  endDate,
}: {
  unavailableDates: string[];
  startDate: string;
  endDate: string;
}): boolean => {
  if (!startDate || !endDate) return false;

  return hasUnavailableDatesInSelectedDates({ startDate, endDate, unavailableDates });
};

export const isUnavailable = (
  unavailableDates: Array<string>,
  date: Date,
  minDate?: string,
  maxDate?: string
): boolean => {
  if (minDate && isValidDateFormat(minDate) && (isAfter(toDate(minDate), date) || isSameDay(toDate(minDate), date))) {
    return true;
  }
  if (maxDate && isValidDateFormat(maxDate) && (isBefore(toDate(maxDate), date) || isSameDay(toDate(maxDate), date))) {
    return true;
  }

  return unavailableDates.some((unavailableDate: string) => isSameDay(new Date(unavailableDate), date));
};

export const isValidDateFormat = (value: string) => {
  const regexp = new RegExp(/^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/);
  return regexp.test(value);
};

export const toDate = (value: string) => {
  return new Date(value);
};

export const formatDate = (date: Date) => {
  return format(date, 'yyyy/MM/dd');
};
