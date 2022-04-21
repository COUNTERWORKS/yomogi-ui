import React from 'react';
import { ThemeContext } from '../components/ThemeProvider';

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};
