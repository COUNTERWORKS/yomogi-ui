import { ComponentPropsWithRef, forwardRef } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';

type Props = {
  id: string;
  label: string;
  className?: string;
} & ComponentPropsWithRef<'input'>

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ id, label, className = '', ...props }, ref) => {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Input {...props} id={id} ref={ref} type="checkbox" theme={theme}/>
      <Label htmlFor={id} theme={theme}>
        {label}
      </Label>
    </Container>
  );
});

Checkbox.displayName = 'Checkbox';

const Container = styled.div`
  padding: 4px 8px;
  padding-left: 0;
`;

const Label = styled.label<{ theme: Theme }>`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 17px;
  margin: 0;
  padding-left: 25px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:before {
    position: absolute;
    top: 2px;
    left: 0;
    width: 17px;
    height: 17px;
    border: ${({ theme }) => `solid 2px ${theme.colors.border}`};
    background-color: ${({ theme }) => theme.colors.white};
    content: '';
    border-radius: 3px;
    box-sizing: border-box;
    transition: .2s ease-in-out;
    transition-property: background-color, color, border-color, opacity;
  }
`;

const Input = styled.input<{ theme: Theme }>`
  -webkit-clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(100%);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  &:checked + label {
    &:before {
      background: ${({ theme }) => theme.colors.secondary.main};
      box-shadow: ${({ theme }) => `0 0 0 2px ${theme.colors.blue[200]}`};
      border-color: ${({ theme }) => theme.colors.secondary.main};
    }
    &:after {
      border-right: ${({ theme }) => `2px solid ${theme.colors.white}`};
      border-bottom:  ${({ theme }) => `2px solid ${theme.colors.white}`};
      content: '';
      box-sizing: content-box;
      display: block;
      height: 7px;
      left: 5px;
      margin-top: -6px;
      position: absolute;
      top: 50%;
      transform: rotate(45deg);
      width: 5px;
    }
  }
`;


