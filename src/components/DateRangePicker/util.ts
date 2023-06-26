import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
import { format } from 'date-fns';
import { CellType } from './types';

export const getDaysInMonth = (date: Date): Array<Partial<number>> => {
  const lastDate = dayjs(date).endOf('month').date();
  const startDay = dayjs(date).startOf('month').day();

  const dates = Array(lastDate)
    .fill(null)
    .map((_, index: number) => index + 1);
  const emptyArray = Array(startDay).fill(null);

  return [...emptyArray, ...dates];
};

export const getCellType = (dates: { startDate: string; endDate: string }, _date: Date): CellType => {
  const startDate = isValidDateFormat(dates.startDate) ? dayjs(dates.startDate) : '';
  const endDate = isValidDateFormat(dates.endDate) ? dayjs(dates.endDate) : '';
  const date = dayjs(_date);

  if (!endDate && !startDate) {
    return 'default';
  }

  if (endDate && startDate) {
    if (endDate.isSame(startDate) && startDate.isSame(date)) {
      return 'single';
    }

    if (date.isSame(startDate)) {
      return 'start';
    }

    if (date.isSame(endDate)) {
      return 'end';
    }

    if (endDate.isAfter(date) && startDate.isBefore(date)) {
      return 'middle';
    }
  } else {
    if (startDate && date.isSame(startDate)) {
      return 'start';
    }

    if (endDate && date.isSame(endDate)) {
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
    (date) => !dayjs(date).isBefore(dayjs(startDate)) && !dayjs(date).isAfter(dayjs(endDate))
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
  date: Dayjs,
  minDate?: string,
  maxDate?: string
): boolean => {
  if (minDate && isValidDateFormat(minDate) && dayjs(minDate).isSameOrAfter(date)) {
    return true;
  }
  if (maxDate && isValidDateFormat(maxDate) && dayjs(maxDate).isSameOrBefore(date)) {
    return true;
  }

  return unavailableDates.some((unavailableDate: string) => date.isSame(dayjs(unavailableDate)));
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
