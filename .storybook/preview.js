import { YomogiThemeProvider, resetStyle } from '../src/components'
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
    <YomogiThemeProvider>
      <Global styles={resetStyle} />
      <Story />
    </YomogiThemeProvider>
  ),
];