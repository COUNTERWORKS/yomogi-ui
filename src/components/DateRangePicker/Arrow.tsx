import { memo, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  type: 'right' | 'left';
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
  hidden?: boolean;
};

export const Arrow = memo(({ type, onClick, disabled = false, hidden = false }: Props) => (
  <Container onClick={(event) => !disabled && onClick(event)} disabled={disabled}>
    {!hidden && (type === 'right' ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleLeft} />)}
  </Container>
));

Arrow.displayName = 'Arrow';

const Container = styled.div<{ disabled: boolean }>`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 100px;
  user-select: none;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  &:hover {
    background: #f5f5f5;
    cursor: pointer;
  }
`;
