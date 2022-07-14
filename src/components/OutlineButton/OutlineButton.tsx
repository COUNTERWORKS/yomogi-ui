import { FC, ComponentPropsWithRef } from 'react';
import { Color, Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';

type ButtonColor = Extract<Color, 'primary' | 'secondary' | 'neutral' | 'danger'>;
type ButtonSize = 'small' | 'normal' | 'auto' | 'large' | 'full'

type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  /** フォームの高さにボタンの高さを合わせる */
  formAdjacent?: boolean;
}

const buttonWidth = {
  small: '120px',
  normal: '240px',
  auto: 'auto',
  large: '400px',
  full: '100%',
};

export const OutlineButton: FC<ComponentPropsWithRef<'button'> & ButtonProps> = ({ color = 'primary', size = 'normal', formAdjacent = false, children, ...props }) => {
  const theme = useTheme();

  return <StyledButton color={color} theme={theme} size={size} formAdjacent={formAdjacent} {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button<{theme: Theme, color: ButtonColor, size: ButtonSize, formAdjacent: boolean}>`
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  border: solid 1px ${({ theme, color }) => theme.colors[color].main};
  outline: none;
  border-radius: 3px;
  transition: all .2s ease-in-out;
  text-decoration: none;
  padding: ${({ theme, formAdjacent }) => formAdjacent ? `${theme.space(2)}px ${theme.space(6)}px`: `${theme.space(3)}px ${theme.space(6)}px`};
  color: ${({ theme, color }) => theme.colors[color].main};
  background: transparent;
  width: ${({ size }) => buttonWidth[size]};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme, color }) => theme.colors[color].main};
  };
  &:disabled {
    color: ${({ theme, color }) => theme.colors[color].main};
    background:transparent;
    cursor: default;
  };
`;
