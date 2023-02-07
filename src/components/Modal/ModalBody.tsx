import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ModalBody: React.FC<Props> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  padding: 16px 24px;
  box-sizing: border-box;
`;
