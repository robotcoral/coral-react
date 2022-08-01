import { createContext, useMemo, useState } from "react";
import { FCC } from "types";

export type MenubarEvents =
  | "new"
  | "import"
  | "export"
  | "settings"
  | "undo"
  | "redo"
  | "cut"
  | "copy"
  | "paste"
  | "start"
  | "stop"
  | "pause"
  | "step"
  | "raiseSpeed"
  | "lowerSpeed"
  | "resetSpeed"
  | "zoomIn"
  | "zoomOut"
  | "resetFontSize"
  | "editorSettings"
  | "search"
  | "worldImport"
  | "worldExport"
  | "worldSettings"
  | "worldReset"
  | "worldSave";

interface MenubarContextInterface {
  triggerEvent: (event: MenubarEvents) => void;
  addEventListener: (event: MenubarEvents, callback: () => void) => void;
  removeEventListener: (event: MenubarEvents, callback: () => void) => void;
}

export const MenubarContext = createContext<MenubarContextInterface>(
  {} as MenubarContextInterface
);

export const MenubarContextProvider: FCC = ({ children }) => {
  const [eventListeners, setEventListeners] = useState<
    Partial<Record<MenubarEvents, (() => void)[]>>
  >({});

  const triggerEvent = (event: MenubarEvents) => {
    eventListeners[event]?.forEach((callback) => callback());
  };

  const addEventListener = (event: MenubarEvents, callback: () => void) => {
    if (eventListeners[event]) {
      setEventListeners({
        ...eventListeners,
        [event]: [...(eventListeners[event] || []), callback],
      });
    } else {
      setEventListeners({ ...eventListeners, [event]: [callback] });
    }
  };

  const removeEventListener = (event: MenubarEvents, callback: () => void) => {
    if (eventListeners[event]) {
      setEventListeners({
        ...eventListeners,
        [event]: eventListeners[event]?.filter((cb) => cb !== callback) || [],
      });
    }
  };

  const values = useMemo(
    () => ({
      triggerEvent,
      addEventListener,
      removeEventListener,
    }),
    [eventListeners]
  );

  return (
    <MenubarContext.Provider value={values}>{children}</MenubarContext.Provider>
  );
};
