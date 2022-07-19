import { ThemeProvider, resetStyle } from '../src/components'
import { Global } from '@emotion/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Global styles={resetStyle} />
      <Story />
    </ThemeProvider>
  ),
];