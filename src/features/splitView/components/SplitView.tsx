import {
  createRef,
  FC,
  MouseEventHandler,
  ReactElement,
  TouchEventHandler,
  useEffect,
  useState,
} from "react";
import { styled } from "styles";
import { Pane } from "./Pane";

const MIN_WIDTH = 75;

const SplitViewWrapper = styled("div", {
  height: "100%",
  display: "flex",
  padding: ".5rem",
});

const Divider = styled("div", {
  "width": ".8rem",
  "cursor": "ew-resize",
  "display": "flex",
  "alignItems": "center",
  "fontSize": "1.25rem",
  "lineHeight": ".7rem",
  "userSelect": "none",
  "textAlign": "center",
  "color": "white",
  "&::before": { content: "• • •" },
});

export const SplitView: FC<{
  children: [ReactElement, ReactElement];
}> = ({ children }) => {
  const [leftWidth, setLeftWidth] = useState<undefined | number>(undefined);
  const [separatorXPosition, setSeparatorXPosition] = useState<
    undefined | number
  >(undefined);
  const [dragging, setDragging] = useState(false);

  const splitPaneRef = createRef<HTMLDivElement>();

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setDragging(true);
  };

  const onMove = (clientX: number) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH);
        return;
      }

      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth;

        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH);
          return;
        }
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <SplitViewWrapper ref={splitPaneRef}>
      <Pane width={leftWidth} setWidth={setLeftWidth} minWidth="20%">
        {children[0]}
      </Pane>
      <Divider
        aria-hidden
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      />
      <Pane minWidth="20%">{children[1]}</Pane>
    </SplitViewWrapper>
  );
};
