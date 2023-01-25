import { memo, ReactNode, ComponentPropsWithRef } from 'react';
import styled from '@emotion/styled';

type Unit = 'yen' | 'square-meter' | 'tsubo';

type Props = {
  unit?: Unit;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithRef<'div'>;

const getUnit = (unit: Unit): string => {
  switch (unit) {
    case 'yen':
      return '円';
    case 'square-meter':
      return '㎡';
    case 'tsubo':
      return '坪';
    default:
      return '';
  }
};

export const InputGroup = memo<Props>(({ children, unit, className = '', ...props }) => {
  return (
    <Container className={className} {...props}>
      {children}
      {unit && <Right>{getUnit(unit)}</Right>}
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  display: flex;
  > input {
    width: 100%;
    padding-right: 40px;
  }
`;

const Right = styled.span`
  height: 22px;
  text-align: center;
  line-height: 22px;
  position: absolute;
  right: 0;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 12px;
`;
