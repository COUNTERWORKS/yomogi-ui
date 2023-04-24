import { FC, ReactNode, useMemo, memo, MouseEvent } from 'react';
import { addMonths, differenceInCalendarMonths, startOfDay } from 'date-fns';
import { getCellType, isUnavailable } from './util';
import { getDaysInMonth } from './util';
import { Arrow } from './Arrow';
import { Cell } from './Cell';
import styled from '@emotion/styled';

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];

const Component: FC<{
  startDate: string;
  endDate: string;
  cursorDate: Date;
  prevMonth: (event: MouseEvent) => void;
  nextMonth: (event: MouseEvent) => void;
  minDate?: string;
  maxDate?: string;
  addMonthCount: number;
  unavailableDates: string[];
  onClick: (value: string) => void;
  first: boolean;
  end: boolean;
}> = ({
  startDate,
  endDate,
  cursorDate,
  prevMonth,
  nextMonth,
  minDate,
  maxDate,
  addMonthCount,
  unavailableDates,
  onClick,
  first,
  end,
}) => {
  const year = useMemo(() => {
    const date = addMonths(cursorDate, addMonthCount);

    return date.getFullYear();
  }, [cursorDate, addMonthCount]);

  const month = useMemo(() => {
    const date = addMonths(cursorDate, addMonthCount);

    return date.getMonth() + 1;
  }, [cursorDate, addMonthCount]);

  const days = useMemo(() => {
    const date = addMonths(cursorDate, addMonthCount);
    return getDaysInMonth(date);
  }, [cursorDate, addMonthCount]);

  return (
    <div>
      <Header>
        <Arrow
          type="left"
          onClick={prevMonth}
          disabled={minDate ? differenceInCalendarMonths(cursorDate, startOfDay(new Date(minDate))) === 0 : false}
          hidden={!first}
        />
        <Year>
          {year}年{month}月
        </Year>
        <Arrow
          type="right"
          onClick={nextMonth}
          disabled={maxDate ? differenceInCalendarMonths(cursorDate, startOfDay(new Date(maxDate))) === 0 : false}
          hidden={!end}
        />
      </Header>
      <Week>
        {WEEK.map(
          (value: string): ReactNode => (
            <Cell key={value} value={value} hoverable={false} />
          )
        )}
      </Week>
      <Contents>
        {days.map(
          (value: number, index: number): ReactNode => (
            <Cell
              key={index}
              value={value}
              year={year}
              month={month}
              onClick={onClick}
              type={getCellType({ startDate, endDate }, new Date(year, month - 1, value))}
              hoverable={Boolean(value)}
              unavailable={isUnavailable(
                unavailableDates,
                startOfDay(new Date(year, month - 1, value)),
                minDate,
                maxDate
              )}
            />
          )
        )}
      </Contents>
    </div>
  );
};

export const Picker = memo(Component);

Picker.displayName = 'Picker';

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 8px;
`;

const Year = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-auto-rows: 40px;
  padding: 8px 0 0 0;
  color: #8e8e8e;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-auto-rows: 40px;
`;
