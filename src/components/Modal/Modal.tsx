import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { keyframes } from '@emotion/react';

type Size = 'small' | 'medium' |'large' | 'full';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size: Size;
  children: React.ReactNode;
  className?: string;
}

const modalSize = {
  'small': '320px',
  'medium': '640px',
  'large': '960px',
  'full': '100vw',
};


export const Modal: React.FC<Props> = ({ isOpen, size = 'medium', onClose, children, className = '' }) => {
  const theme = useTheme();

  return (
    <Container isOpen={isOpen} className={className} >

      <Content theme={theme} size={size}>
        {children}
      </Content>
      <Overay isOpen={isOpen} onClick={onClose}/>
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


const Overay = styled.div<{ isOpen: Boolean; }>`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 10;
`;

const Container = styled.div<{ isOpen: Boolean; }>`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none' };
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 10;
  animation: ${animation} 0.1s ease 1;
`;

const Content = styled.div<{ theme: Theme; size: Size }>`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  max-width: ${({ size }) => modalSize[size] };
  margin: 64px auto;
  border-radius: 3px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  overflow: scroll;
  z-index: 20;
  max-height: 80vh;
  ${({ size }) => size === 'full' && `
    height: 100vh;
    margin: 0;
    border-radius: 0;
  `}
`;