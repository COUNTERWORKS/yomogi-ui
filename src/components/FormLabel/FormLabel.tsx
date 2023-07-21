import { FC, ReactNode } from 'react';
import { Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';

export const FormLabel: FC<{
  htmlFor?: string;
  children: ReactNode;
  className?: string;
  optional?: boolean;
}> = ({ children, htmlFor, className = '', optional = false }) => {
  const theme = useTheme();

  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {children}
      {optional && <Optional theme={theme}>（任意）</Optional>}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: block;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

const Optional = styled.span<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
