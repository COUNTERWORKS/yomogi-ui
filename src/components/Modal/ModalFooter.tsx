import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';

type JustifyContent = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' ;

type Props = {
  children: React.ReactNode;
  sticky?: boolean
  className?: string;
  justifyContent?: JustifyContent;
}

export const ModalFooter: React.FC<Props> = ({ children, className, justifyContent = 'normal', sticky = true }) => {
  const theme = useTheme();

  return (
    <Footer theme={theme} sticky={sticky} justifyContent={justifyContent} className={className}>{children}</Footer>
  );
};

const Footer = styled.div<{ theme: Theme; sticky: Boolean, justifyContent: JustifyContent }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 16px 24px;
  border-top: ${({ theme }) => `solid 1px ${theme.colors.border}`};
  position: ${({ sticky }) => sticky ? 'sticky' : 'relative' };
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
`;
