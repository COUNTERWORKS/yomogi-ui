import { FC, ComponentPropsWithRef } from 'react';
import { Color, Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Xmark } from '../../components/Icons';

type AlertColor = Extract<Color, 'info' | 'success' | 'caution' | 'error'>;

type AlertProps = {
  color: AlertColor;
  /** closeを押したときに実行される */
  onClickCloseButton?: () => void;
  /** closeボタンを表示 */
  showCloseButton?: boolean;
};

export const Alert: FC<ComponentPropsWithRef<'div'> & AlertProps> = ({
  color,
  children,
  onClickCloseButton,
  showCloseButton,
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledAlert color={color} theme={theme} {...props}>
      {children}
      {showCloseButton && (
        <CloseButton onClick={onClickCloseButton}>
          <Xmark />
        </CloseButton>
      )}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<{ theme: Theme; color: AlertColor }>`
  position: relative;
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
  top: 12px;
  right: 16px;
  height: 21px;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  path {
    fill: currentColor;
  }
`;
