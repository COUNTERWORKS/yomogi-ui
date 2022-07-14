import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';

type JustifyContent = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' ;

type Props = {
  justify?: JustifyContent;
  children: React.ReactNode;
  gap?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Flex: React.FC<Props> = ({ justify = 'normal', children, gap = 0, ...props }) => {
  const theme = useTheme();

  return (
    <Container justify={justify} gap={gap} theme={theme} {...props}>{children}</Container>
  );
};

const Container = styled.div<{ justify: JustifyContent, gap: number, theme: Theme }>`
  display: flex;
  justify-content: ${({ justify }) => justify };
  gap: ${({ theme, gap }) => theme.space(gap)}px;
`;
