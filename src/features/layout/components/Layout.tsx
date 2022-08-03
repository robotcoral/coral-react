import { styled } from "styles";
import { FCC } from "types";
import { Titlebar } from "./Titlebar";

const Main = styled("main", { flex: "1" });

export const Layout: FCC = ({ children }) => (
  <>
    <Titlebar />
    <Main>{children}</Main>
  </>
);
