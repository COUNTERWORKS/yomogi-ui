import { FC } from 'react';
import styled from '@emotion/styled';
import { PaginationItem, CellType } from './PaginationItem';

type PaginationItemType = {
  value: string;
  targetPage?: number;
  disabled: boolean;
  type: CellType;
}

const buildPaginationItems = (currentPage: number, lastPage: number, gap: number) => {
  const items: PaginationItemType[] = [{ value: '<<', disabled: currentPage === 1, targetPage: 1, type: 'doubleLeft' }, { value: '<', disabled: currentPage === 1, targetPage: currentPage < 1 ? 1 : currentPage - 1, type: 'left' }];
  if (2 + gap === currentPage) {
    items.push(...Array.from(Array(gap), (_, k) => k + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
    })));
  } else if (2 + gap < currentPage) {
    items.push(...Array.from(Array(gap + 1), (_, k) => currentPage - gap + k - 1).map((value, index): PaginationItemType => {
      if (index === 0) {
        return ({
          value: '...',
          disabled: true,
          type: 'dot',
        });
      };

      return ({
        value: String(value),
        disabled: false,
        targetPage: value,
        type: 'value',
      });
    }));
  } else {
    items.push(...Array.from(Array(currentPage - 1), (_, k) => k + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
    })));
  }

  items.push({
    value: String(currentPage),
    disabled: true,
    targetPage: currentPage,
    type: 'value',
  });

  if (currentPage + gap === lastPage) {
    items.push(...Array.from(Array(gap), (_, k) => k + currentPage + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
    })));
  } else if (currentPage + gap < lastPage) {
    items.push(...Array.from(Array(gap + 1), (_, k) => k + currentPage+ 1).map((value, index): PaginationItemType => {
      if (Array(gap + 1).length === index + 1) {
        return ({
          value: '...',
          disabled: true,
          type: 'dot',
        });
      };

      return ({
        value: String(value),
        disabled: false,
        targetPage: value,
        type: 'value',
      });
    }));
  } else {
    items.push(...Array.from(Array(lastPage - currentPage), (_, k) => k + currentPage + 1).map((value): PaginationItemType => ({
      value: String(value),
      disabled: false,
      targetPage: value,
      type: 'value',
    })));
  }

  items.push(...[{ value: '>', disabled: currentPage === lastPage, targetPage: currentPage === lastPage ? currentPage : currentPage + 1, type: 'right' }, { value: '>>', disabled: currentPage === lastPage, targetPage: lastPage, type: 'doubleRight' }] as PaginationItemType[]);

  return items;
};

type Props = {
  currentPage: number;
  lastPage: number;
  /** ページネーションに表示する要素の数を決める。現在のページから前後${gap}個を表示する */
  gap?: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({ currentPage, lastPage, onChange, gap = 1 }) => {
  const paginationItems = buildPaginationItems(currentPage, lastPage, gap);

  return (
    <Container>
      {paginationItems.map((paginationItem, index) => (<PaginationItem key={index} type={paginationItem.type} value={paginationItem.value} onClick={() => onChange(paginationItem.targetPage as number)} disabled={paginationItem.disabled} />))}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;
