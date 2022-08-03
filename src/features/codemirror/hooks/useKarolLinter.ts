import { Diagnostic } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";
import { compile, CompilerError } from "@robotcoral/lang-karol";
import { useIntl } from "react-intl";

type LinterFunction = (view: EditorView) => Diagnostic[];

export const useKarolLinter = (): LinterFunction => {
  const intl = useIntl();

  const lintKarol: LinterFunction = (view) => {
    try {
      compile(view.state.doc.toString());
    } catch (error) {
      if (error instanceof CompilerError) {
        return [
          {
            from: error.pos.from,
            to: error.pos.to,
            severity: "error",
            message: intl.formatMessage({ id: `error.${error.code}` }),
          },
        ];
      }
    }
    return [];
  };
  return lintKarol;
};
