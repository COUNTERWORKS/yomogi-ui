import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight, HiDotsHorizontal } from 'react-icons/hi';

export type CellType = 'value' | 'doubleLeft' | 'left' | 'doubleRight' | 'right' | 'dot';

type Props = {
  type: CellType;
  value: string;
  onClick: () => void;
  disabled?: boolean;
}

const buildChildren = (value: string) => {
  return {
    'value': value,
    'doubleLeft': <HiChevronDoubleLeft />,
    'left': <HiChevronLeft />,
    'doubleRight': <HiChevronDoubleRight />,
    'right': <HiChevronRight />,
    'dot': <HiDotsHorizontal />,
  };
};


export const PaginationItem: FC<Props> = ({ type, value, onClick, disabled = false }) => {
  const theme = useTheme();
  const paginationChildren = buildChildren(value);
  return (
    <Cell onClick={() => !disabled && onClick()} disabled={disabled} theme={theme}>{paginationChildren[type]}</Cell>
  );
};

PaginationItem.displayName = 'PaginationItem';

const Cell = styled.div<{ theme: Theme; disabled: boolean }>`
  font-size: 14px;
  position: relative;
  padding: 12px 16px;
  height: 42px;
  box-sizing: border-box;
  margin-left: -1px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${(({ theme }) => `1px solid ${theme.colors.border}`)};
  color: ${({ theme, disabled }) => disabled ? theme.colors.text : theme.colors.primary.main};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer' };
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:hover {
    ${({ theme, disabled }) => disabled ?
        css`
          cursor: 'default';
        `:
        css`
          cursor: 'pointer';
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.white};
        `
}
  }
`;
