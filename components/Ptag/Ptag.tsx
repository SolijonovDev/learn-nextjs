import { FC } from "react";
import { IPtag } from "./Ptag.type";
import styles from './ptag.module.scss';
import cn from 'classnames';

export const Ptag: FC<IPtag> = ({ size = "m", children, className, ...props }): JSX.Element => {
    return (
        <p
            className={cn(styles.p,
                {
                    [styles.l]: size === "l",
                    [styles.m]: size === "m",
                    [styles.s]: size === "s"
                },
                className)}
            {...props}
        >{children}</p>
    );
};