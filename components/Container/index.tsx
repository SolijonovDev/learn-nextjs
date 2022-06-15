import { FC } from "react"
import { IContainer } from "./container.type"
import styles from "./container.module.scss"



export const Container: FC<IContainer> = ({ children }):JSX.Element => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};