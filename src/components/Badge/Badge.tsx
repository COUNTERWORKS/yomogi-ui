import { FC, ComponentPropsWithRef } from 'react';
import { Color, Theme } from '../../themes';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';

type BadgeColor = Extract<Color, 'primary' | 'secondary' | 'neutral' | 'light' | 'info' | 'success' | 'caution' | 'error'>;

type BadgeProps = {
  color: BadgeColor;
}

export const Badge: FC<ComponentPropsWithRef<'div'> & BadgeProps> = ({ color = 'primary', children, ...props }) => {
  const theme = useTheme();

  return <StyledBadge color={color} theme={theme} {...props}>{children}</StyledBadge>;
};

const StyledBadge = styled.div<{theme: Theme, color: BadgeColor }>`
  position: relative;
  display: inline-block;
  padding: 0 10px;
  border-radius: 100px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return `
          color: ${theme.colors.primary.text};
          background-color: ${theme.colors.primary.main};
        `;
      case 'secondary':
        return `
          color: ${theme.colors.secondary.text};
          background-color: ${theme.colors.secondary.main};
        `;
      case 'neutral':
        return `
          color: ${theme.colors.neutral.text};
          background-color: ${theme.colors.neutral.main};
        `;
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
      case 'light':
        return `
          color: ${theme.colors.gray[700]};
          background-color: ${theme.colors.gray[100]};
        `;
      default:
        return ``;
    }
  }}
`;

