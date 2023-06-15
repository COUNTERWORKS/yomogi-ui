import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';

type Props = {
  sticky?: boolean;
  children: React.ReactChild;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export const ModalHeader: React.FC<Props> = ({ children, onClose, className = '', sticky = true, style }) => {
  const theme = useTheme();

  return (
    <Container theme={theme} className={className} sticky={sticky} style={style}>
      {children}
      <StyledIcon theme={theme} onClick={onClose}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.6582 12.5895C15.052 13.027 15.052 13.6832 14.6582 14.077C14.2207 14.5145 13.5645 14.5145 13.1707 14.077L8.0082 8.8707L2.80195 14.077C2.36445 14.5145 1.7082 14.5145 1.31445 14.077C0.876953 13.6832 0.876953 13.027 1.31445 12.5895L6.5207 7.3832L1.31445 2.17695C0.876953 1.73945 0.876953 1.0832 1.31445 0.689453C1.7082 0.251953 2.36445 0.251953 2.7582 0.689453L8.0082 5.93945L13.2145 0.733203C13.6082 0.295703 14.2645 0.295703 14.6582 0.733203C15.0957 1.12695 15.0957 1.7832 14.6582 2.2207L9.45195 7.3832L14.6582 12.5895Z"
            fill="#aaa"
          />
        </svg>
      </StyledIcon>
    </Container>
  );
};

const Container = styled.div<{ theme: Theme; sticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  padding: 16px 24px;
  border-bottom: ${({ theme }) => `solid 1px ${theme.colors.border}`};
  background: ${({ theme }) => theme.colors.white};
  top: 0;
  z-index: 20;
`;

const StyledIcon = styled.span<{ theme: Theme }>`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.gray['400']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
