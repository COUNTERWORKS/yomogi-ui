import { FC, ComponentPropsWithRef, ReactNode } from 'react';
import { useTheme } from '../../hooks';
import styled from '@emotion/styled';
import { Theme } from '../../themes';
import { VscChevronDown } from 'react-icons/vsc';

type Props = {
  isError?: boolean;
  children: ReactNode;
}

export const Select: FC<ComponentPropsWithRef<'select'> & Props> = ({ className = '', isError = false, children, ...props }) => {
  const theme = useTheme();

  return (
    <Container className={className}>
      <StyledSelect
        isError={isError}
        theme={theme}
        {...props}
      >
        {children}
      </StyledSelect>
      <VscChevronDown size={22} color={'#414141'} style={{
        position: 'absolute',
        top: 8,
        right: 8,
      }}/>
    </Container>
  );
};

const StyledSelect = styled.select<{ theme: Theme, isError: boolean }>`
  max-height: 39px;
  padding-right: 32px;
  position: relative;
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme, isError }) => `solid 1px ${isError ? theme.colors.red[700] : theme.colors.border}`};
  border-radius: 3px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  min-height: 39px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]}
  };
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary.main}
  }
`;

const Container = styled.div`
  position: relative;
`;


