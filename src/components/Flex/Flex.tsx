import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';

type Props = {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  children: React.ReactNode;
  gap?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Flex: React.FC<Props> = ({ justify = 'normal', children, gap = 0, align = 'center', ...props }) => {
  const theme = useTheme();

  return (
    <Container justify={justify} align={align} gap={gap} theme={theme} {...props}>{children}</Container>
  );
};

const Container = styled.div<{ justify: React.CSSProperties['justifyContent'], gap: number, theme: Theme, align: React.CSSProperties['alignItems'] }>`
  display: flex;
  justify-content: ${({ justify }) => justify };
  align-items: ${({ align }) => align };
  gap: ${({ theme, gap }) => theme.space(gap)}px;
`;
