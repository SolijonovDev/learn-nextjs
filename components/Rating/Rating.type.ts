import { DetailedHTMLProps, HtmlHTMLAttributes, } from "react";


export interface IRating extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
   rating:number;
   isEditable:boolean;
   setRating:(num:number)=>void;
}