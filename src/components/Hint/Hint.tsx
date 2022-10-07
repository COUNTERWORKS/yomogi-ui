import { FC, ComponentPropsWithRef } from 'react';
import { Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';

export const Hint: FC<ComponentPropsWithRef<'p'>> = ({ children, ...props }) => {
  const theme = useTheme();

  return <StyledHint theme={theme} {...props}>{children}</StyledHint>;
};

const StyledHint = styled.p<{theme: Theme }>`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 4px 0;
`;
