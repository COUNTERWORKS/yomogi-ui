import { FC, ReactNode } from 'react';
import { Theme } from '../../themes';
import { useTheme } from '../../hooks';
import { FormLabel } from '../FormLabel';
import { Hint } from '../Hint';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  className?: string;
  label?: string;
  hint?: string;
  optional?: boolean;
  errorMessage?: string;
}

export const FormBlock: FC<Props> = ({ children, hint ='', label = '', className = '', optional = false, errorMessage }) => {
  const theme = useTheme();

  return (
    <StyledFormBlock className={className}>
      {label && <FormLabel optional={optional}>{label}</FormLabel>}
      {hint && <Hint>{hint}</Hint>}
      {children}
      {errorMessage && <ErrorMessage theme={theme}>{errorMessage}</ErrorMessage>}
    </StyledFormBlock>
  );
};

const StyledFormBlock = styled.div`
  position: relative;
  margin: 24px 0 0 0;
  vertical-align: middle;
  &:nth-of-type(1) {
    margin-top: 0;
  }
`;

const ErrorMessage = styled.div<{ theme: Theme }>`
  margin: 6px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error.main};
`;


