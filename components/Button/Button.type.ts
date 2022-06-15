import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
  children: ReactNode;
  appearance?: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}
