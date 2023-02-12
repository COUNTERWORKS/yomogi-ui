import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';

type Unit = 'hour' | 'minute';

type Props = {
  isError?: boolean;
  children: ReactNode;
  className?: string;
  unit?: Unit;
} & ComponentPropsWithRef<'select'>;

const getUnit = (unit: Unit): string => {
  switch (unit) {
    case 'hour':
      return '時';
    case 'minute':
      return '分';
  }
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ isError = false, children, className, unit, ...props }, ref) => {
    const theme = useTheme();

    return (
      <Container theme={theme} className={className}>
        <StyledSelect {...props} ref={ref} isError={isError} theme={theme}>
          {children}
        </StyledSelect>
        {unit && <Right>{getUnit(unit)}</Right>}
      </Container>
    );
  }
);

Select.displayName = 'Select';

const StyledSelect = styled.select<{ theme: Theme; isError: boolean }>`
  max-height: 39px;
  padding-right: 32px;
  position: relative;
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme, isError }) => `solid 1px ${isError ? theme.colors.red[700] : theme.colors.border}`};
  border-radius: 3px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  min-height: 39px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  appearance: none;
  pointer-events: auto;
  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme, isError }) => !isError && theme.colors.secondary.main};
  }
`;

const Container = styled.div<{ theme: Theme }>`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: 16px;
    top: 17px;
    width: 8px;
    height: 8px;
    border-top: ${({ theme }) => `1px solid ${theme.colors.text}`};
    border-left: ${({ theme }) => `1px solid ${theme.colors.text}`};
    transform: translateY(-50%) rotate(-135deg);
    pointer-events: none;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Right = styled.span`
  height: 22px;
  text-align: center;
  line-height: 22px;
  position: absolute;
  right: 32px;
  top: 0;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 12px;
  pointer-events: none;
`;
