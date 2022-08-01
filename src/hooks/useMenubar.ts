import { MenubarContext } from "context/menubarContext";
import { useContext } from "react";

export const useMenubar = () => useContext(MenubarContext);
