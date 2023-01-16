import {
  ReactNode,
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEventHandler,
  RefObject,
  MouseEvent,
} from 'react';
import { subMonths, addMonths, isAfter, isBefore, differenceInCalendarDays } from 'date-fns';
import { useToggle, useClickAway } from 'react-use';
import styled from '@emotion/styled';
import { Picker } from './Picker';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { formatDate, isValidDateFormat, toDate, isDisabled } from './util';
import { css } from '@emotion/react';

type RenderInputProps = {
  onClick: () => void;
  onChange: ChangeEventHandler;
  isError: boolean;
  ref: RefObject<HTMLInputElement>;
  value: string;
};

type DateRangePickerProps = {
  defaultStartDate?: string;
  defaultEndDate?: string;
  unavailableDates?: string[];
  minPeriod?: number;
  onError?: () => void;
  onClickAway?: () => void;
  renderInput: ({ startProps, endProps }: { startProps: RenderInputProps; endProps: RenderInputProps }) => ReactNode;
  disabled?: boolean;
  numberOfMonths?: number;
  noMargin?: boolean;
  noBorder?: boolean;
  opened?: boolean;
  absolute?: boolean;
};

export const DateRangePicker = memo<DateRangePickerProps>(
  ({
    defaultStartDate = '',
    defaultEndDate = '',
    unavailableDates = [],
    minPeriod = 0,
    onError,
    renderInput,
    onClickAway,
    disabled = false,
    numberOfMonths = 1,
    noMargin = false,
    noBorder = false,
    opened = false,
    absolute = true,
  }) => {
    const [startDate, setStartDate] = useState<string>(defaultStartDate || '');
    const [endDate, setEndDate] = useState<string>(defaultEndDate || '');
    const [isEndDateError, setIsEndDateError] = useState<boolean>(false);
    const [isStartDateError, setIsStartDateError] = useState<boolean>(false);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [on, toggle] = useToggle(false);
    const clickAwayRef = useRef(null);
    const [currentDate, setCurrentDate] = useState<Date>(defaultStartDate ? new Date(defaultStartDate) : new Date());
    const [cursor, setCursor] = useState<'start' | 'end'>();
    const theme = useTheme();

    const prevMonth = useCallback(
      (event: MouseEvent): void => {
        event.preventDefault();
        setCurrentDate((date) => subMonths(date, numberOfMonths));
        cursor === 'end' ? endDateRef.current?.focus() : startDateRef.current?.focus();
      },
      [numberOfMonths, cursor]
    );

    const nextMonth = useCallback(
      (event: MouseEvent): void => {
        event.preventDefault();
        setCurrentDate((date) => addMonths(date, numberOfMonths));
        cursor === 'end' ? endDateRef.current?.focus() : startDateRef.current?.focus();
      },
      [numberOfMonths]
    );

    const validateRange = useCallback(
      (invalid: boolean) => {
        if (invalid && onError) {
          onError();
        }
        setIsEndDateError(invalid);
        setIsStartDateError(invalid);
        setIsInvalid(invalid);
      },
      [onError]
    );

    const handleClick = useCallback(
      (value: string): void => {
        const selectedDate = new Date(value);

        if (cursor === 'start' || !cursor) {
          if (endDate && isAfter(selectedDate, toDate(endDate))) {
            setStartDate(formatDate(selectedDate));
            setEndDate('');
          } else {
            if (endDate && minPeriod && differenceInCalendarDays(toDate(endDate), selectedDate) < minPeriod) {
              return;
            }
            setStartDate(formatDate(selectedDate));
            validateRange(isDisabled({ unavailableDates, startDate: formatDate(selectedDate), endDate }));
          }
          setCursor('end');
          endDateRef.current?.focus();
        } else if (startDate && isBefore(selectedDate, toDate(startDate))) {
          setStartDate(formatDate(selectedDate));
          setEndDate('');
          setCursor('end');
          endDateRef.current?.focus();
        } else {
          if (startDate && minPeriod && differenceInCalendarDays(selectedDate, toDate(startDate)) < minPeriod) {
            return;
          }
          setEndDate(formatDate(selectedDate));
          validateRange(isDisabled({ unavailableDates, startDate, endDate: formatDate(selectedDate) }));
          setCursor('end');
          endDateRef.current?.focus();
        }
      },
      [startDate, endDate, minPeriod, unavailableDates, cursor, validateRange]
    );

    useClickAway(clickAwayRef, () => {
      toggle(false);
      setCursor(undefined);
      if (onClickAway) {
        onClickAway();
      }
    });

    useEffect(() => {
      if (defaultEndDate && defaultStartDate) {
        const disabled = isDisabled({ unavailableDates, startDate: defaultStartDate, endDate: defaultEndDate });
        setIsInvalid(disabled);
        if (disabled && onError) {
          onError();
        }
      }
    }, [defaultEndDate, defaultStartDate, unavailableDates]);

    const handleStartDateClick = useCallback(() => {
      toggle(true);
      setCursor('start');
      startDateRef.current?.focus();
    }, []);

    const handleEndDateClick = useCallback(() => {
      toggle(true);
      setCursor('end');
      endDateRef.current?.focus();
    }, []);

    const handleStartDateChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (event) => {
        const { value } = event.target;

        if (isValidDateFormat(value)) {
          setCurrentDate(toDate(value));
          setIsStartDateError(false);
          if (isValidDateFormat(endDate) && isAfter(toDate(endDate), toDate(value))) {
            setEndDate('');
          }
        } else {
          setIsStartDateError(true);
        }
        setStartDate(value);

        if (!value) {
          setIsStartDateError(false);
        }
      },
      [endDate]
    );

    const handleEndDateChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (event) => {
        const { value } = event.target;

        if (isValidDateFormat(value)) {
          setCurrentDate(toDate(value));
          setIsEndDateError(false);
          if (isValidDateFormat(startDate) && isBefore(toDate(startDate), toDate(value))) {
            setStartDate('');
          }
        } else {
          setIsEndDateError(true);
        }
        setEndDate(value);

        if (!value) {
          setIsEndDateError(false);
        }
      },
      [startDate]
    );

    return (
      <Container>
        <InputContainer numberOfMonths={numberOfMonths}>
          {renderInput({
            startProps: {
              onChange: handleStartDateChange,
              isError: isStartDateError,
              ref: startDateRef,
              onClick: handleStartDateClick,
              value: startDate,
            },
            endProps: {
              onChange: handleEndDateChange,
              onClick: handleEndDateClick,
              isError: isEndDateError,
              ref: endDateRef,
              value: endDate,
            },
          })}
          {absolute && (opened || (on && !disabled)) && (
            <DateRangePickerContainer
              numberOfMonths={numberOfMonths}
              noMargin={noMargin}
              ref={clickAwayRef}
              noBorder={noBorder}
            >
              <PickerInner>
                {[
                  ...Array(numberOfMonths)
                    .fill(1)
                    .map((_, index) => (
                      <Picker
                        key={index}
                        startDate={startDate}
                        endDate={endDate}
                        cursorDate={currentDate}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                        addMonthCount={index}
                        onClick={handleClick}
                        unavailableDates={unavailableDates}
                        first={index === 0}
                        end={Array(numberOfMonths).fill(1).length - 1 === index}
                      />
                    )),
                ]}
              </PickerInner>
              {isInvalid && <Error theme={theme}>選択した期間は他の申込・利用不可日が設定されています。</Error>}
            </DateRangePickerContainer>
          )}
        </InputContainer>
        {!absolute && (opened || (on && !disabled)) && (
          <DateRangePickerContainer
            numberOfMonths={numberOfMonths}
            noMargin={noMargin}
            ref={clickAwayRef}
            noBorder={noBorder}
          >
            <PickerInner>
              {[
                ...Array(numberOfMonths)
                  .fill(1)
                  .map((_, index) => (
                    <Picker
                      key={index}
                      startDate={startDate}
                      endDate={endDate}
                      cursorDate={currentDate}
                      prevMonth={prevMonth}
                      nextMonth={nextMonth}
                      addMonthCount={index}
                      onClick={handleClick}
                      unavailableDates={unavailableDates}
                      first={index === 0}
                      end={Array(numberOfMonths).fill(1).length - 1 === index}
                    />
                  )),
              ]}
            </PickerInner>
            {isInvalid && <Error theme={theme}>選択した期間は他の申込・利用不可日が設定されています。</Error>}
          </DateRangePickerContainer>
        )}
      </Container>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';

const Container = styled.div`
  position: relative;
  width: auto;
`;

const DateRangePickerContainer = styled.div<{ numberOfMonths: number; noMargin: boolean; noBorder: boolean }>`
  width: ${({ numberOfMonths }) => 356 * numberOfMonths}px;
  bottom: 0px;
  box-sizing: border-box;
  padding: 24px;
  margin-top: ${({ noMargin }) => (noMargin ? 0 : 8)}px;
  ${({ noBorder }) =>
    !noBorder &&
    css`
      border-radius: 12px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    `}
`;

const InputContainer = styled.div<{ numberOfMonths: number }>`
  position: 'relative';
  max-width: ${({ numberOfMonths }) => 356 * numberOfMonths}px;
`;

const PickerInner = styled.div`
  display: flex;
  gap: 40px;
`;

const Error = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.danger.main};
`;
