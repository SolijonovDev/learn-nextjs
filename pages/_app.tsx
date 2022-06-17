import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <div>
     <nav>
                    <Link href={"/users"}>Users</Link>
                    <Link href={"/blogs"}>Blogs</Link>
                    <Link href={"/posts"}>Posts</Link>
                </nav>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;