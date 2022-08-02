import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { FC, useCallback } from "react";
import { styled } from "styles";

type OnChangeProps = Parameters<
  Exclude<ReactCodeMirrorProps["onChange"], undefined>
>;

const StyledCodeMirror = styled(CodeMirror, {
  "height": "100%",
  "& .cm-editor": { btrr: "$default", height: "100%" },
});

export const CodeMirrorPanel: FC = () => {
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
    />
  );
};
