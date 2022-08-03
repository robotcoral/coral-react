import { linter } from "@codemirror/lint";
import { karol } from "@robotcoral/lang-karol";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { FC, useCallback } from "react";
import { styled } from "styles";
import { useKarolLinter } from "../hooks/useKarolLinter";

type OnChangeProps = Parameters<
  Exclude<ReactCodeMirrorProps["onChange"], undefined>
>;

const StyledCodeMirror = styled(CodeMirror, {
  "height": "100%",
  "& .cm-editor": { btrr: "$default", height: "100%" },
});

export const CodeMirrorPanel: FC = () => {
  const karolLinter = useKarolLinter();

  const onChange = useCallback(
    (value: OnChangeProps[0], _viewUpdate: OnChangeProps[1]) => {
      console.log("value:", value);
    },
    []
  );

  return (
    <StyledCodeMirror
      value="console.log('hello world!');"
      onChange={onChange}
      extensions={[karol(), linter(karolLinter)]}
    />
  );
};
