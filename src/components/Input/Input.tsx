import { ComponentPropsWithRef, forwardRef } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';

type Props = {
  isError?: boolean;
  className?: string;
  maxLength?: string;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(({ isError = false, className = '', maxLength= '', ...props }, ref) => {
  const theme = useTheme();

  return <StyledInput {...props} ref={ref} isError={isError} theme={theme} className={className} maxlength={maxLength}/>;
});

Input.displayName = 'Input';

const StyledInput = styled.input<{ theme: Theme; isError: boolean }>`
  position: relative;
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme, isError }) => `solid 1px ${isError ? theme.colors.red[700] : theme.colors.border}`};
  border-radius: 3px;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  min-height: 39px;
  font-size: 14px;
  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme, isError }) => !isError && theme.colors.secondary.main};
  }
`;
