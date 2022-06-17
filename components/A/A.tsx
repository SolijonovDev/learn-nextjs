import { NextPage } from "next";
import Link from "next/link"
import { IA } from "./A.type";
import styles from "./a.module.scss";
import cn from 'classnames';



export const A: NextPage<IA> = ({ href, children, className, ...props }) => {
    return (
        <Link href={href}
        >
            <a className={cn(className, styles.a)} {...props}>
                {children}
            </a>
        </Link>
    );
};