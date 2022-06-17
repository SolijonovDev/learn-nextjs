import { NextPage } from "next";
import { ILayout } from "./Layout.type";
import styles from './layout.module.scss';
import { A } from "../components/A/A";
import { Ptag } from "../components/Ptag/Ptag";


const Layout: NextPage<ILayout> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header>
                <nav className={styles.nav}>
                    <A href={"/"}>Home</A>
                    <A href={"/users"}>Users</A>
                    <A href={"/blogs"}>Blogs</A>
                    <A href={"/posts"}>Posts</A>
                </nav>
            </header>
            <div className={styles.main}>
                {children}
            </div>
            <footer className={styles.footer}>
                <Ptag size="l">footer</Ptag>
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

