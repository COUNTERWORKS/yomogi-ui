import { FC, ComponentPropsWithRef } from 'react';
import { Color } from '../../theme';
import styled from '@emotion/styled';

type ButtonProps = {
  color: Color;
}

export const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  color: pink
`;
