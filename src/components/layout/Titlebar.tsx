import { MenubarEvents } from "context/menubarContext";
import { useMenubar } from "hooks";
import { FormattedMessage } from "react-intl";
import {
  ContentList,
  ContentListButtonItem,
  ContentListLink,
  GroupItem,
  IconWrapper,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./TitlebarComponents";

type MenuGroup = {
  titleId: string;
  items: { titleId: string; event?: MenubarEvents; href?: string }[];
};

const menu: MenuGroup[] = [
  {
    titleId: "menu.file",
    items: [
      { titleId: "menu.new", event: "new" },
      { titleId: "menu.import", event: "import" },
      { titleId: "menu.export", event: "export" },
      { titleId: "menu.settings", event: "settings" },
    ],
  },
  {
    titleId: "menu.edit",
    items: [
      { titleId: "menu.undo", event: "undo" },
      { titleId: "menu.redo", event: "redo" },
      { titleId: "menu.cut", event: "cut" },
      { titleId: "menu.copy", event: "copy" },
      { titleId: "menu.paste", event: "paste" },
    ],
  },
  {
    titleId: "menu.execute",
    items: [
      { titleId: "menu.start", event: "start" },
      { titleId: "menu.stop", event: "stop" },
      { titleId: "menu.pause", event: "pause" },
      { titleId: "menu.step", event: "step" },
      { titleId: "menu.raiseSpeed", event: "raiseSpeed" },
      { titleId: "menu.lowerSpeed", event: "lowerSpeed" },
      { titleId: "menu.resetSpeed", event: "resetSpeed" },
    ],
  },
  {
    titleId: "menu.editor",
    items: [
      { titleId: "menu.zoomIn", event: "zoomIn" },
      { titleId: "menu.zoomOut", event: "zoomOut" },
      { titleId: "menu.resetFontSize", event: "resetFontSize" },
      { titleId: "menu.editorSettings", event: "editorSettings" },
      { titleId: "menu.search", event: "search" },
    ],
  },
  {
    titleId: "menu.world",
    items: [
      { titleId: "menu.worldImport", event: "worldImport" },
      { titleId: "menu.worldExport", event: "worldExport" },
      { titleId: "menu.worldReset", event: "worldReset" },
      { titleId: "menu.worldSave", event: "worldSave" },
      { titleId: "menu.worldSettings", event: "worldSettings" },
    ],
  },
  {
    titleId: "menu.help",
    items: [
      {
        titleId: "menu.documentation",
        href: "https://docs.robotcoral.de/en/latest/",
      },
      { titleId: "menu.info", href: "https://robotcoral.de/" },
      { titleId: "menu.impressum", href: "https://robotcoral.de/impressum" },
      { titleId: "menu.supportUs", href: "https://ko-fi.com/robotcoral" },
    ],
  },
];

export const Titlebar = () => {
  const { triggerEvent } = useMenubar();

  return (
    <NavigationMenu>
      <IconWrapper />

      <NavigationMenuList>
        {menu.map((group) => (
          <GroupItem key={group.titleId}>
            <NavigationMenuTrigger>
              <FormattedMessage id={group.titleId} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ContentList>
                {group.items.map((item) => {
                  return item.event ? (
                    <ContentListButtonItem
                      key={item.titleId}
                      onClick={() => triggerEvent(item.event as MenubarEvents)}
                    >
                      <FormattedMessage id={item.titleId} />
                    </ContentListButtonItem>
                  ) : (
                    <ContentListLink href={item.href || ""} key={item.titleId}>
                      <FormattedMessage id={item.titleId} />
                    </ContentListLink>
                  );
                })}
              </ContentList>
            </NavigationMenuContent>
          </GroupItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
