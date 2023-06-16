module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "storybook-addon-react-docgen"
  ],
  "staticDirs": ["../src/public"],
  "plugins": [
    "@emotion"
  ],
  "framework": "@storybook/react"
}
