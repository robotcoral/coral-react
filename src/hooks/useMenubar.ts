import { MenubarContext } from "providers/menubarContext";
import { useContext } from "react";

export const useMenubar = () => useContext(MenubarContext);
