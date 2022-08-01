import { FC, ReactNode } from "react";

export type FCC<T = Record<string, unknown>> = FC<{ children?: ReactNode } & T>;

export type withChildren<T = Record<string, unknown>> = T & {
  children?: ReactNode;
};
