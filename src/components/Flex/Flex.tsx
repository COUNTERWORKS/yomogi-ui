import React from 'react';
import styled from '@emotion/styled';

type JustifyContent = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' ;

type Props = {
  justify?: JustifyContent;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

export const Flex: React.FC<Props> = ({ justify = 'normal', children, ...props }) => {
  return (
    <Container justify={justify} {...props}>{children}</Container>
  );
};

const Container = styled.div<{ justify: JustifyContent }>`
  display: flex;
  justify-content: ${({ justify }) => justify };
`;
