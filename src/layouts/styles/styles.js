import { injectGlobal } from 'emotion';

/* eslint-disable no-unused-expressions */
injectGlobal`

html { box-sizing: border-box; }
*, *:before, *:after { box-sizing: inherit; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 62.5%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  font-family: 'Roboto';
  line-height: 1;
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

a:focus {
  outline: none;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #5DADE2;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1031;

  width: 100%;
  height: 2px;
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

::-webkit-input-placeholder {
  color: #8c8c8c;
  font-weight: 300;
  font-family: 'NetflixSans';
}
::-moz-placeholder {
  color: #8c8c8c;
  font-weight: 300;
  font-family: 'NetflixSans';
}
:-ms-input-placeholder {
  color: #8c8c8c;
  font-weight: 300;
  font-family: 'NetflixSans';
}
:-moz-placeholder {
  color: #8c8c8c;
  font-weight: 300;
  font-family: 'NetflixSans';
}

em { font-weight: 500; }
a {
  color: #5DADE2;
}

.no-scroll { overflow: hidden; }

// TABLES
table {
  border: 1px solid #e6e6e6;
}

thead {
  border: 1px solid #e6e6e6;
}

td {
  padding: 30px;
  border: 1px solid #e6e6e6;
}

td p {
  padding-bottom: 5px;
}

th {
  padding: 30px;
  text-align: left;
  font-weight: 500;
  border: 1px solid #e6e6e6;
}

`;
