import { FC } from 'react';
import styled from '@emotion/styled';
import { PaginationItem, CellType } from './PaginationItem';
import { useWindowSize } from 'react-use';
import { useTheme } from '../../hooks';

type PaginationItemType = {
  value: string;
  // mobile, dotの場合はundefinedになる
  targetPage?: number;
  disabled: boolean;
  type: CellType;
  enabledAnchorHref: boolean;
}

const buildPaginationItems = (currentPage: number, lastPage: number, gap: number, isMobile: boolean, enabledAnchorHref: boolean) => {
  const items: PaginationItemType[] = [];

  if (isMobile) {
    items.push({ value: '<<', disabled: currentPage === 1, targetPage: 1, type: 'doubleLeft', enabledAnchorHref });
    items.push({ value: '<', disabled: currentPage === 1, targetPage: currentPage < 1 ? 1 : currentPage - 1, type: 'left', enabledAnchorHref });
    items.push({ value: `${currentPage}/${lastPage}`, disabled: true, type: 'value', enabledAnchorHref: false });
    items.push(
        ...[
          { value: '>', disabled: currentPage === lastPage, targetPage: currentPage === lastPage ? currentPage : currentPage + 1, type: 'right', enabledAnchorHref },
          { value: '>>', disabled: currentPage === lastPage, targetPage: lastPage, type: 'doubleRight', enabledAnchorHref },
        ] as PaginationItemType[],
    );
    return items;
  }

  items.push({ value: '<<', disabled: currentPage === 1, targetPage: 1, type: 'doubleLeft', enabledAnchorHref });
  items.push({ value: '<', disabled: currentPage === 1, targetPage: currentPage < 1 ? 1 : currentPage - 1, type: 'left', enabledAnchorHref });
  if (2 + gap === currentPage) {
    items.push(...Array.from(Array(gap), (_, k) => k + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
      enabledAnchorHref,
    })));
  } else if (2 + gap < currentPage) {
    items.push(...Array.from(Array(gap + 1), (_, k) => currentPage - gap + k - 1).map((value, index): PaginationItemType => {
      if (index === 0) {
        return ({
          value: '...',
          disabled: true,
          type: 'dot',
          enabledAnchorHref: false,
        });
      };

      return ({
        value: String(value),
        disabled: false,
        targetPage: value,
        type: 'value',
        enabledAnchorHref,
      });
    }));
  } else {
    items.push(...Array.from(Array(currentPage - 1), (_, k) => k + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
      enabledAnchorHref,
    })));
  }

  items.push({
    value: String(currentPage),
    disabled: true,
    targetPage: currentPage,
    type: 'value',
    enabledAnchorHref: false,
  });

  if (currentPage + gap === lastPage) {
    items.push(...Array.from(Array(gap), (_, k) => k + currentPage + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
      enabledAnchorHref,
    })));
  } else if (currentPage + gap < lastPage) {
    items.push(...Array.from(Array(gap + 1), (_, k) => k + currentPage+ 1).map((value, index): PaginationItemType => {
      if (Array(gap + 1).length === index + 1) {
        return ({
          value: '...',
          disabled: true,
          type: 'dot',
          enabledAnchorHref: false,
        });
      };

      return ({
        value: String(value),
        disabled: false,
        targetPage: value,
        type: 'value',
        enabledAnchorHref,
      });
    }));
  } else {
    items.push(...Array.from(Array(lastPage - currentPage), (_, k) => k + currentPage + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
      enabledAnchorHref,
    })));
  }

  items.push(...[{ value: '>', disabled: currentPage === lastPage, targetPage: currentPage === lastPage ? currentPage : currentPage + 1, type: 'right', enabledAnchorHref }, { value: '>>', disabled: currentPage === lastPage, targetPage: lastPage, type: 'doubleRight', enabledAnchorHref }] as PaginationItemType[]);

  return items;
};

export type anchorHrefParamsType = {
  pathname: string,
  replaceTarget: string,
} | undefined;

type Props = {
  currentPage: number;
  lastPage: number;
  /** ページネーションに表示する要素の数を決める。現在のページから前後${gap}個を表示する */
  gap?: number;
  onChange: (page: number) => void;
  enabledAnchorHref?: boolean;
  anchorHrefParams?: anchorHrefParamsType;
}

export const Pagination: FC<Props> = ({ currentPage, lastPage, onChange, gap = 1, enabledAnchorHref = false, anchorHrefParams }) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const paginationItems = buildPaginationItems(currentPage, lastPage, gap, width <= theme.breakPoints.mobile, enabledAnchorHref);

  return (
    <Container>
      {paginationItems.map((paginationItem, index) => (
        <PaginationItem
          key={index}
          type={paginationItem.type}
          value={paginationItem.value}
          targetPage={paginationItem.targetPage as number}
          onClick={() => onChange(paginationItem.targetPage as number)}
          disabled={paginationItem.disabled}
          enabledAnchorHref={paginationItem.enabledAnchorHref}
          anchorHrefParams={anchorHrefParams} />
      ))}
    </Container>
  );
};


const Container = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;
