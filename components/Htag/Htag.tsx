import { FC } from "react";
import { IHtag } from "./Htag.type";
import styles from './htag.module.scss';
import cn from 'classnames';

export const Htag: FC<IHtag> = ({ tag, children, className,...rest }): JSX.Element => {
    switch (tag) {
        case "h1":
            return <h1 className={cn(styles.h1,className)}>{children}</h1>;
        case "h2":
            return <h2 className={cn(styles.h2,className)}>{children}</h2>;
        case "h3":
            return <h3 className={cn(styles.h3,className)}>{children}</h3>;
        default:
            return <></>;
    }
};