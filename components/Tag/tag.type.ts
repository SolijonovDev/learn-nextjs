import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: "ghost" | "red" | "blue";
  size?: "s" | "m" | "l";
  href?:string;
}
