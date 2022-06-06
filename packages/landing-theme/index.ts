import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: Record<string, any>) => ({
      p: {
        mb: "0.8rem",
      },
      body: {
        color: props.theme.colors.base.black,
      },
    }),
  },
  fonts: {
    heading: "DM Sans, sans-serif",
    body: "DM Sans, sans-serif",
  },
  colors: {
    base: {
      black: "#0e0e11",
      pureWhite: "#ffffff",
      offWhite: "#faf9f8",
      softBlue: "#f5f8ff",
    },
    backgrounds: {
      beige: "#e9e7e4",
      softRed: "#f9f0f0",
      softOrange: "#fff4e3",
      softYellow: "#fffcea",
      softGreen: "#f7fcec",
      softTeal: "#f8ffff",
      softViolet: "#f9f6ff",
      coolGrey: "#e5ecec",
    },
    accents: {
      yellow: "#fefdbf",
      orange: "#ffd37a",
      peach: "#ffbb8d",
      blue: "#d4e4f9",
    },
  },
  letterSpacings: {
    tight: "-0.025em",
    tighter: "-0.015em",
  },
  lineHeights: {
    // Правило - к какому ключу в теме по умолчанию ближе значение. Чтобы не запутаться, и не переназначать потом значения
    shortest: 1.07,
    shorter: 1.2,
    short: 1.3,
    tall: 1.7,
  },
  fontSizes: {
    sm: "0.875rem",
    xl: "1.25rem",
    "2xl": "1.4375rem",
    "3xl": "1.75rem",
    "3.5xl": "2rem",
    "4xl": "2.25rem",
    "5xl": "3.375rem",
  },
  textStyles: {
    headline: {
      fontSize: ["4xl", "4xl", "5xl"],
      lineHeight: ["none", "none", "shorter"],
      letterSpacing: "tighter",
      fontWeight: "medium",
    },
    subheadline: {
      fontSize: ["2xl", "3xl", "3.5xl"],
      lineHeight: ["short", "shortest", "short"],
      letterSpacing: "tight",
      fontWeight: "medium",
    },
    body: {
      fontWeight: "normal",
      fontSize: ["sm", "sm", "xl"],
      // one-off
      // https://github.com/kentcdodds/bookshelf/blob/exercises/02-styles/INSTRUCTIONS.md
      lineHeight: [1.714, 1.714, "tall"],
    },
    h5: {
      fontWeight: "medium",
      letterSpacing: "normal",
      lineHeight: "short",
      fontSize: "1.5rem",
    },
  },
});

export const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap";

export default theme;
