import { CodeIcon, GearIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/tabs";
import { CodeMirrorPanel } from "features/codemirror";
import { FC } from "react";

export const EditorAndSettingsPanel: FC = () => (
  <Tabs
    defaultValue="editor"
    orientation="vertical"
    css={{ height: "100%", width: "100%" }}
  >
    <TabsList
      aria-label="Switch between settings and code editor"
      css={{ paddingTop: "12px", width: "3.25rem" }}
    >
      <TabsTrigger
        value="editor"
        className="inverted-indicator"
        css={{ height: "3.25rem" }}
      >
        <CodeIcon height="1.5rem" width="auto" />
      </TabsTrigger>
      <TabsTrigger
        value="settings"
        className="inverted-indicator"
        css={{ height: "3.25rem" }}
      >
        <GearIcon height="1.5rem" width="auto" />
      </TabsTrigger>
    </TabsList>
    <TabsContent value="editor" className="from-start">
      <CodeMirrorPanel />
    </TabsContent>
    <TabsContent value="settings" className="from-end" />
  </Tabs>
);
