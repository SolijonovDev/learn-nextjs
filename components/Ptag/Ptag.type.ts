import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from "react";


export interface IPtag extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    children:ReactNode;
    size?:"l"|"m"|"s";
}