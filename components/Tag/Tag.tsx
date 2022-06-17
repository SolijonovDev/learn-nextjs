import { FC, useEffect } from 'react';
import styles from './tag.module.scss';
import { ITag } from './tag.type';
import cn from "classnames";


export const Tag: FC<ITag> = ({ children, size = "m", color = "ghost", href, className, ...props }) => {
  
    return (
        <div
            className={
                cn(className, styles.tag,
                    {
                        [styles.s]: size === "s",
                        [styles.m]: size === "m",
                        [styles.l]: size === "l",
                        [styles.ghost]: color === "ghost",
                        [styles.red]: color === "red",
                        [styles.blue]: color === "blue",
                    }
                )
            }
            {...props}
        >
            {
                href ?
                    <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};