import { FC, ComponentPropsWithRef } from 'react';
import { Color, Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';

type AlertColor = Extract<Color, 'info' | 'success' | 'caution' | 'error'>;

type AlertProps = {
  color: AlertColor;
  onClickCloseButton?: () => void;
  showCloseButton?: boolean;
}

export const Alert: FC<ComponentPropsWithRef<'div'> & AlertProps> = ({ color, children, onClickCloseButton, showCloseButton, ...props }) => {
  const theme = useTheme();

  return (
    <StyledAlert color={color} theme={theme} {...props}>
      {children}
      {showCloseButton && <CloseButton onClick={onClickCloseButton}><IoMdClose size={21} /></CloseButton>}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<{ theme: Theme, color: AlertColor }>`
  position: relative;
  display: block;
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 3px;
  box-sizing: border-box;
  ${({ theme, color }) => {
    switch (color) {
      case 'info':
        return `
          color: ${theme.colors.info.main};
          background-color: ${theme.colors.blue[200]};
        `;
      case 'success':
        return `
          color: ${theme.colors.success.main};
          background-color: ${theme.colors.green[200]};
        `;
      case 'caution':
        return `
          color: ${theme.colors.caution.main};
          background-color: ${theme.colors.orange[200]};
        `;
      case 'error':
        return `
          color: ${theme.colors.error.main};
          background-color: ${theme.colors.red[200]};
        `;
      default:
        return ``;
    }
  }}
`;

const CloseButton = styled.div`
  position: absolute;
  line-height: 1;
  top: 12px;
  right: 16px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

