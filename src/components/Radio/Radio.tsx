import { FC, ComponentPropsWithRef } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';

type Props = {
  id: string;
  label: string;
}

export const Radio: FC<ComponentPropsWithRef<'input'> & Props> = ({ id, label, className = '', ...props }) => {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Input id={id} {...props} type="radio" theme={theme}/>
      <Label htmlFor={id} theme={theme}>
        {label}</Label>
    </Container>
  );
};

const Container = styled.div`
  padding: 4px 8px;
  padding-left: 0;
`;

const Label = styled.label<{ theme: Theme }>`
  min-height: 1.7rem;
  position: relative;
  display: inline-block;
  margin: 0;
  padding-left: 2.5rem;
  &:hover {
    cursor: pointer;
  }
  &:before {
    position: absolute;
    top: 2px;
    left: 0;
    width: 1.7rem;
    height: 1.7rem;
    border: ${({ theme }) => `solid 2px ${theme.colors.border}`};
    background-color: ${({ theme }) => theme.colors.white};
    content: '';
    border-radius: 100%;
    box-sizing: border-box;
    transition: .2s ease-in-out;
    transition-property: background-color, color, border-color, opacity;
  }
`;

const Input = styled.input<{ theme: Theme }>`
  -webkit-clip: rect(1px,1px,1px,1px);
  -webkit-clip-path: inset(100%);
  clip: rect(1px,1px,1px,1px);
  clip-path: inset(100%);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  &:checked + label {
    &:before {
      background: ${({ theme }) => theme.colors.secondary.main};
      box-shadow: ${({ theme }) => `inset 0 0 0 3px ${theme.colors.white}, 0 0 0 2px ${theme.colors.blue[200]}`};
      border-color: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;


