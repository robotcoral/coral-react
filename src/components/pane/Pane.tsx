import { createRef, useEffect } from "react";
import { styled } from "styles";
import { AllOrNone, FCC } from "types";

const StyledDiv = styled("div", {
  br: "$default",
  backgroundColor: "$bg",
  variants: {
    grow: {
      true: { flex: "1" },
    },
  },
});

type SplitPaneProps = AllOrNone<{
  width: number | undefined;
  setWidth: (value: number) => void;
}> & { minWidth?: number | string };

export const Pane: FCC<SplitPaneProps> = ({
  children,
  width,
  setWidth,
  minWidth,
}) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      if (!width && setWidth) {
        setWidth(ref.current.clientWidth);
        return;
      }

      ref.current.style.width = `${width}px`;
    }
  }, [ref, setWidth, width]);

  return (
    <StyledDiv ref={ref} grow={!width} css={{ minWidth }}>
      {children}
    </StyledDiv>
  );
};
