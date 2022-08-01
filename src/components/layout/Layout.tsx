import { styled } from "styles";
import { FCC } from "types";
import { Titlebar } from "./Titlebar";

const Main = styled("main", { height: "100%" });

export const Layout: FCC = ({ children }) => (
  <>
    <Titlebar />
    <main>{children}</main>
  </>
);
