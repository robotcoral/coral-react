import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  Content,
  Item,
  Link as RadixLink,
  List,
  NavigationMenuLinkProps,
  NavigationMenuTriggerProps,
  Root,
  Trigger,
} from "@radix-ui/react-navigation-menu";
import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
} from "components/animations";
import { ComponentProps, forwardRef, RefAttributes } from "react";
import { styled } from "styles";
import { withChildren } from "types/fcc";

export const NavigationMenu = styled(Root, {
  position: "relative",
  display: "flex",
  width: "100%",
  zIndex: 1,
  height: "$titlebarHeight",
  backgroundColor: "$bg",
});

export const NavigationMenuList = styled(List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  width: "100%",
  height: "100%",
});

const itemStyles = {
  "outline": "none",
  "userSelect": "none",
  "fontWeight": 500,
  "lineHeight": 1,
  "borderRadius": "$small",
  "fontSize": 16,
  "px": 8,
  "&:focus": { position: "relative" },
};

const StyledTrigger = styled(Trigger, {
  "all": "unset",
  ...itemStyles,
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": 2,
  "height": "100%",
  '&[data-state="open"]': {
    backgroundColor: "$highlightText",
  },
});

const StyledCaret = styled(CaretDownIcon, {
  "position": "relative",
  "top": 1,
  "[data-state=open] &": { transform: "rotate(-180deg)" },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "transform 250ms ease",
  },
});

export const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret aria-hidden />
  </StyledTrigger>
));

const NavigationMenuLink = styled(RadixLink, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  fontSize: 15,
  lineHeight: 1,
});

export const NavigationMenuContent = styled(Content, {
  "position": "absolute",
  "top": "$titlebarHeight",
  "left": 0,
  "backgroundColor": "$bg",
  "border": "1px solid $border",
  "brb": "$default",
  "boxShadow": "0 8px 16px #0003",
  "width": "100%",
  "@media only screen and (min-width: 600px)": { width: "auto" },
  "@media (prefers-reduced-motion: no-preference)": {
    "animationDuration": "250ms",
    "animationTimingFunction": "ease",
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

export const ContentList = styled("ul", {
  margin: 0,
  listStyle: "none",
  px: 0,
  py: 8,
  minWidth: 250,
  display: "flex",
  flexDirection: "column",
});

const ListItem = styled("li", {
  width: "100%",
});

const LinkTitle = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
});

const LinkText = styled("p", {
  all: "unset",
  lineHeight: 1.4,
  fontWeight: "initial",
});

export const ContentListItem = forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps & RefAttributes<HTMLAnchorElement>
>(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
      }}
    >
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{children}</LinkText>
    </NavigationMenuLink>
  </ListItem>
));

const contentLisItemStyles = {
  "backgroundColor": "transparent",
  "border": "none",
  "fontSize": "1rem",
  "width": "100%",
  "textAlign": "start",
  "p": ".25rem 1rem",
  "&:hover": { backgroundColor: "$highlight2" },
};

const ContentListButton = styled("button", contentLisItemStyles);

export const ContentListLink = styled("a", {
  "color": "inherit",
  "text-decoration": "none",
  ...contentLisItemStyles,
});

export const ContentListButtonItem = forwardRef<
  HTMLButtonElement,
  withChildren<ComponentProps<typeof ContentListButton>>
>(({ children, ...props }, forwardedRef) => (
  <ListItem>
    <ContentListButton ref={forwardedRef} {...props} type="button">
      {children}
    </ContentListButton>
  </ListItem>
));

export const IconWrapper = styled("div", {
  width: "3.5rem",
  brr: "$small",
  backgroundImage:
    "linear-gradient(to top right, hsl(304, 100%, 32%), hsl(0, 87%, 69%))",
  textAlign: "center",
  boxShadow: "0 0 0 1px hsla(0, 0%, 0%, .1)",
  marginRight: ".75rem",
});

export const GroupItem = styled(Item, { position: "relative" });
