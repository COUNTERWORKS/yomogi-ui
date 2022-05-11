import { FC, ComponentPropsWithRef } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';

type Props = {
  isError?: boolean;
}

export const Input: FC<ComponentPropsWithRef<'input'> & Props> = ({ className = '', isError = false, ...props }) => {
  const theme = useTheme();

  return (
    <StyledInput
      isError={isError}
      theme={theme}
      className={className}
      {...props}
    />
  );
};

const StyledInput = styled.input<{ theme: Theme, isError: boolean }>`
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
  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]}
  };
  &:focus {
    outline: none;
    border-color:  ${({ theme }) => theme.colors.secondary.main}
  }
`;
