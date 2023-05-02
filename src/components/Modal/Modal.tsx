import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { keyframes } from '@emotion/react';

type Size = 'small' | 'medium' | 'large' | 'full';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size: Size;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
};

const modalSize = {
  small: '320px',
  medium: '640px',
  large: '960px',
  full: '100vw',
};

export const Modal: React.FC<Props> = ({
  isOpen,
  size = 'medium',
  onClose,
  children,
  className = '',
  style,
  contentStyle,
}) => {
  const theme = useTheme();

  return (
    <Container isOpen={isOpen} className={className} style={style}>
      <Content theme={theme} size={size} style={contentStyle}>
        {children}
      </Content>
      <Overay isOpen={isOpen} onClick={onClose} />
    </Container>
  );
};

const animation = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`;

const Overay = styled.div<{ isOpen: boolean }>`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 10;
`;

const Container = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 9999;
  animation: ${animation} 0.1s ease 1;
`;

const Content = styled.div<{ theme: Theme; size: Size }>`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  max-width: ${({ size }) => modalSize[size]};
  margin: 64px auto;
  border-radius: 3px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
  z-index: 20;
  max-height: 80dvh;
  ${({ size }) =>
    size === 'full' &&
    `
    max-height: 100dvh;
    margin: 0;
    border-radius: 0;
  `}
`;
