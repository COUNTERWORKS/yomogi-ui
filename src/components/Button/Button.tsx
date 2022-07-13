import { FC, ComponentPropsWithRef } from 'react';
import { Color, Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';

type ButtonColor = Extract<Color, 'primary' | 'secondary' | 'neutral' | 'light' | 'danger'>;
type ButtonSize = 'normal' | 'auto' | 'large' | 'full'

type ButtonProps = {
  color?: ButtonColor;
  size?: 'normal' | 'auto' | 'large' | 'full',
  formAdjacent?: boolean;
}

const buttonWidth = {
  normal: '240px',
  auto: 'auto',
  large: '400px',
  full: '100%',
};

export const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = ({ color = 'primary', size = 'normal', formAdjacent = false, children, ...props }) => {
  const theme = useTheme();

  return <StyledButton color={color} theme={theme} size={size} formAdjacent={formAdjacent} {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button<{theme: Theme, color: ButtonColor, size: ButtonSize, formAdjacent: boolean}>`
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  border: solid 1px transparent;
  outline: none;
  border-radius: 3px;
  transition: all .2s ease-in-out;
  text-decoration: none;
  padding: ${({ theme, formAdjacent }) => formAdjacent ? `${theme.space(2)}px ${theme.space(6)}px`: `${theme.space(3)}px ${theme.space(6)}px`};
  color: ${({ theme, color }) => theme.colors[color].text};
  background-color: ${({ theme, color }) => theme.colors[color].main};
  width: ${({ size }) => buttonWidth[size]};

  &:hover {
    background-color: ${({ theme, color }) => theme.colors.hover(theme.colors[color].main)};
  };
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    opacity: 0.4;
  };
`;
