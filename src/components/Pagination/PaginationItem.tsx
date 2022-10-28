import { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '../../hooks';
import { Theme } from '../../themes';
import { anchorHrefParamsType } from '../Pagination';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight, HiDotsHorizontal } from 'react-icons/hi';

export type CellType = 'value' | 'doubleLeft' | 'left' | 'doubleRight' | 'right' | 'dot';

type Props = {
  type: CellType;
  value: string;
  targetPage?: number;
  onClick: () => void;
  disabled?: boolean;
  enabledAnchorHref: boolean;
  anchorHrefParams?: anchorHrefParamsType;
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


export const PaginationItem: FC<Props> = ({ type, value, targetPage, onClick, disabled = false, enabledAnchorHref = false, anchorHrefParams }) => {
  const theme = useTheme();
  const paginationChildren = buildChildren(value);
  const pageUrl = useMemo(() => {
    if (enabledAnchorHref && targetPage && anchorHrefParams) {
      const regExp = new RegExp(`{${anchorHrefParams.replaceTarget}}`);
      const url = anchorHrefParams.pathname.replace(regExp, targetPage.toString());
      return url;
    }

    return '';
  }, [anchorHrefParams, enabledAnchorHref, targetPage]);

  return (
    <Cell onClick={() => !disabled && onClick()} disabled={disabled} theme={theme} enabledAnchor={enabledAnchorHref}>
      {
        enabledAnchorHref ? (
          <CellLink href={pageUrl}>{paginationChildren[type]}</CellLink>
        ) : paginationChildren[type]
      }
    </Cell>
  );
};

PaginationItem.displayName = 'PaginationItem';

const Cell = styled.div<{ theme: Theme; disabled: boolean, enabledAnchor: boolean }>`
  font-size: 14px;
  position: relative;
  padding: ${({ enabledAnchor }) => enabledAnchor ? '0px' : '12px 16px' };
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

const CellLink = styled.a`
  color: inherit;
  display: flex;
  padding: 12px 16px;
  transition: none;
  &:hover {
    text-decoration: none;
    color: inherit;
    cursor: inherit;
  }
`;
