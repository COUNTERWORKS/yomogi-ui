import { FC } from 'react';
import { Theme } from '../../themes';
import { useTheme } from '../../hooks';
import { CellType } from './types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface Props {
  value?: string | number;
  hoverable?: boolean;
  onClick?: (value: string) => void;
  type?: CellType;
  unavailable?: boolean;
  year?: number;
  month?: number;
}

export const Cell: FC<Props> = ({
  value = '',
  year,
  month,
  hoverable = true,
  onClick = undefined,
  type = 'default',
  unavailable = false,
}) => {
  const theme = useTheme();
  return (
    <Container
      theme={theme}
      unavailable={unavailable}
      hoverable={hoverable}
      value={value}
      type={type}
      onClick={() => {
        if (!unavailable && value && onClick && year && month) {
          onClick(`${year}/${month}/${value}`);
        }
      }}
    >
      {value}
    </Container>
  );
};

const Container = styled.div<Props & { theme: Theme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  user-select: none;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  ${({ unavailable, hoverable, theme }: Props & { theme: Theme }) =>
    !unavailable &&
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        border-radius: 4px;
        border: solid 1px ${theme.colors.secondary.main};
        box-sizing: border-box;
      }
    `}

  ${({ unavailable, theme }: Props & { theme: Theme }) =>
    unavailable &&
    css`
      cursor: not-allowed;
      text-decoration: line-through;
      color: ${theme.colors.gray[500]};
    `}

  ${({ value, type, theme }: Props & { theme: Theme }) => {
    if (!value) return css``;

    switch (type) {
      case 'start':
        return css`
          position: relative;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          background: ${theme.colors.secondary.main};
          color: ${theme.colors.white};
          &&:before {
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 40px;
            content: '';
            background: #f1f7fb;
            z-index: -1;
          }
          &:hover {
            border: none;
          }
        `;
      case 'end':
        return css`
          position: relative;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          background: ${theme.colors.secondary.main};
          color: ${theme.colors.white};
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 40px;
            content: '';
            background: #f1f7fb;
            z-index: -1;
          }
          &:hover {
            border: none;
          }
        `;
      case 'middle':
        return css`
          position: relative;
          background: #f1f7fb;
          &:hover {
            &:before {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 40px;
              height: 40px;
              content: '';
              background: #f1f7fb;
              z-index: -1;
            }
          }
        `;
      case 'single':
        return css`
          border-radius: 4px;
          background: ${theme.colors.secondary.main};
          color: ${theme.colors.white};
        `;
      default:
        return '';
    }
  }}
`;
