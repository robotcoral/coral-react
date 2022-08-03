import { createStitches } from "@stitches/react";
import { utils } from "./utils";

const titlebarHeight = "2rem";

/**
 * Stitches configuration for the project.
 *
 * see https://stitches.dev/docs/tokens
 */
export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      highlight1: "hsl(0, 0%, 93%)",
      highlight2: "hsl(0, 0%, 85%)",
      highlightColor1: "hsl(304, 100%, 32%)",
      bg: "hsl(0, 0%, 100%)",
      highlightText: "hsl(22, 100%, 69%)",
      bodyBg: "radial-gradient(ellipse at bottom, #a60496, #e88f5a 80%)",
      text: "hsl(0, 0%, 13%)",
      border: "hsl(0, 0%, 85%)",
    },
    space: {
      titlebarHeight,
    },
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: { titlebarHeight },
    borderWidths: {},
    borderStyles: {},
    radii: {
      default: "0.5rem",
      small: "0.25rem",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils,
});

const generalCss = {
  boxSizing: "border-box",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI Variable Display,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif",
};

const injectGlobalStyles = globalCss({
  "*": generalCss,
  "*:after": generalCss,
  "*:before": generalCss,
  "body": {
    margin: 0,
    padding: 0,
    background: "$bodyBg",
    color: "$text",
  },
  "html": { margin: 0, padding: 0 },
  "#__next": { height: "100vh", display: "flex", flexDirection: "column" },
});

injectGlobalStyles();
