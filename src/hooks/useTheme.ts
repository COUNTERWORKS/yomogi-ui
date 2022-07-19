import React from 'react';
import { YomogiThemeContext } from '../components/ThemeProvider';

export const useTheme = () => {
  const theme = React.useContext(YomogiThemeContext);

  return theme;
};
