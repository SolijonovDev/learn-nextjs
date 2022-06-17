import { NextPage } from "next";
import { FunctionComponent } from "react";
import { ILayout } from "./Layout.type";
import Link from 'next/link';
import styles from './layout.module.scss';


const Layout: NextPage<ILayout> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header>
                <nav className={styles.nav}>
                    <Link href={"/users"}>Users</Link>
                    <Link href={"/blogs"}>Blogs</Link>
                    <Link href={"/posts"}>Posts</Link>
                </nav>
            </header>
            <div className={styles.main}>
                {children}
            </div>
            <footer className={styles.footer}>
                <p>footer</p>
            </footer>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: any) => {
    return (props: T) => (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

