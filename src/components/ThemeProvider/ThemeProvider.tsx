
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { CustomTheme, createTheme } from '../../themes/theme';

export const resetStyle = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    line-height: 1;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ul,
  ol {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  /* change colours to suit your needs */
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }

  /* change colours to suit your needs */
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* change border colour to suit your needs */
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  html {
    font-size: 62.5%; //1rem
    background: #fff;
  }

  body {
    position: relative;
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-feature-settings: "palt";
    font-size: 14px;
    letter-spacing: 0.06em;
    line-height: 1.5;
    word-break: break-all;
    word-wrap: break-word;
    color: #414141;
    margin: 0;
  }

  a {
    color: #ff4a1a;
    text-decoration: none;
    outline: none;
    transition: .2s ease-in-out;
    transition-property: background-color, color, border-color, opacity;
    -webkit-text-decoration-skip: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  form {
    display: inline;
  }

  input,
  textarea,
  select,
  button {
    font-family : inherit;
    font-size : 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: solid 1px #ddd;
    padding: 10px 12px;
    transition: .2s ease-in-out;
    transition-property: background-color, color, border-color, opacity;
  }

  select {
    line-height: 1;
  }

  input[type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
  }

  input[type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
  }

  input::placeholder,
  input:-ms-input-placeholder,
  input::-ms-input-placeholder,
  ::-webkit-input-placeholder {
    color: #999;
  }

  textarea {
    min-height: calc(4 * 1.5 * 10px);
  }

  img {
    vertical-align: bottom;
    border: none;
    outline: none;
    max-width: 100%;
  }
`;

export const YomogiThemeContext = React.createContext(createTheme());

export const YomogiThemeProvider: React.FC<{ customTheme?: CustomTheme, children: ReactNode }>= ({ customTheme, children }) => {
  const theme = React.useMemo(()=> createTheme(customTheme), [customTheme]);

  return (
    <YomogiThemeContext.Provider value={theme}>
      {children}
    </YomogiThemeContext.Provider>
  );
};
