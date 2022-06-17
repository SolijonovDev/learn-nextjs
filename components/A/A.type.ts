import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface IA
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  href: string;
}
