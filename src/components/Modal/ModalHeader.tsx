import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { MdClose } from 'react-icons/md';

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
      <StyledIcon theme={theme} onClick={onClose} />
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

const StyledIcon = styled(MdClose)<{ theme: Theme }>`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.gray['400']};
  cursor: pointer;
`;
