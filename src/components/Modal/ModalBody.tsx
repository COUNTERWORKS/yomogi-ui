import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ModalBody: React.FC<Props> = ({ children, className, style }) => {
  return (
    <Container className={className} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 24px;
  box-sizing: border-box;
`;
