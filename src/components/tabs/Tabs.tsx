import { blackA, mauve } from "@radix-ui/colors";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import {
  enterFromBottom,
  enterFromLeft,
  enterFromRight,
  enterFromTop,
  exitToBottom,
  exitToLeft,
  exitToRight,
  exitToTop,
} from "components/animations";

const StyledTabs = styled(TabsPrimitive.Root, {
  "display": "flex",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
  "width": 300,
  "boxShadow": `0 2px 10px ${blackA.blackA4}`,
});

const StyledList = styled(TabsPrimitive.List, {
  "flexShrink": 0,
  "display": "flex",
  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    borderRight: `1px solid ${mauve.mauve6}`,
  },
  '&[data-orientation="horizontal"]': {
    borderBottom: `1px solid ${mauve.mauve6}`,
  },
});

/**
 * classname "inverted-indicator" flips the active indicator to the other side
 */
const StyledTrigger = styled(TabsPrimitive.Trigger, {
  "all": "unset",
  "fontFamily": "inherit",
  "backgroundColor": "white",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "fontSize": 15,
  "lineHeight": 1,
  "userSelect": "none",
  "&:hover": { backgroundColor: "$highlight2" },
  '&[data-state="active"]': {
    "backgroundColor": "$highlight1",
    "boxShadow": "inset 0 -3px 0 0 $colors$highlightColor1",
    '&[data-orientation="vertical"]': {
      boxShadow: "inset -3px 0 0 0 $colors$highlightColor1",
    },
    "&.inverted-indicator": {
      "boxShadow": "inset 0 3px 0 0 $colors$highlightColor1",
      '&[data-orientation="vertical"]': {
        boxShadow: "inset 3px 0 0 0 $colors$highlightColor1",
      },
    },
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
});

const StyledContent = styled(TabsPrimitive.Content, {
  "flexGrow": 1,
  "outline": "none",
  "@media (prefers-reduced-motion: no-preference)": {
    "animationDuration": "250ms",
    "animationTimingFunction": "ease",
    "&.from-start": { animationName: enterFromLeft },
    "&.from-end": { animationName: enterFromRight },
    "&.to-start": { animationName: exitToLeft },
    "&.to-end": { animationName: exitToRight },
    '&[data-orientation="vertical"]': {
      "&.from-start": { animationName: enterFromTop },
      "&.from-end": { animationName: enterFromBottom },
      "&.to-start": { animationName: exitToTop },
      "&.to-end": { animationName: exitToBottom },
    },
  },
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
