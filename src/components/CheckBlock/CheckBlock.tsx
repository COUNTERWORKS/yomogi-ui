import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  flex?: boolean;
  className?: string;
}

export const CheckBlock: FC<Props> = ({ children, flex = false, className = '' }) => <Container flex={flex} className={className}>{children}</Container>;

const Container = styled.div<{ flex: boolean }>`
  position: relative;
  font-size: 14px;
  ${({ flex }) => flex && 'display: flex' };
`;
