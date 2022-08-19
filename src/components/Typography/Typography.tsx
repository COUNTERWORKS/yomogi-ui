import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { media } from '../../utils/media';

type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

const fontSize = {
  'xsmall': 16,
  'small': 18,
  'medium': 24,
  'large': 30,
  'xlarge': 42,
};

const spFontSize = {
  'xsmall': 14,
  'small': 14,
  'medium': 18,
  'large': 21,
  'xlarge': 24,
};

export const Typography: React.FC<Props> = ({ children, as, size = 'medium', className }) => {
  const theme = useTheme();
  return (
    <Container as={as} size={size} theme={theme} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.span<{ size: Size, theme: Theme }>(({ size, theme }) => {
  return css`
    font-weight: bold;
    margin: ${size === 'xlarge' ? '0 0 48px' : '0 0 24px'};
    font-size: ${fontSize[size]}px;
    ${media(theme.breakPoints.mobile)} {
      font-size: ${spFontSize[size]}px;
      margin: ${size === 'xlarge' ? '0 0 32px' : '0 0 16px'};
    }
  `;
});
