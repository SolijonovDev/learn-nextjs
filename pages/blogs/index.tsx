import { NextPage } from "next";
import Link from "next/link";

export type blogType={
    userId:number | string;
    title:string;
};

type BlogsType={
    data:blogType[]
};

const Blogs: NextPage<BlogsType> = ({data}) => {
    return (
        <div>
            <h1>blogs page</h1>
            <ul>
                {
               data.map(v=>(
                <li key={v.userId+v.title}>
                    <Link href={`/blogs/${v.userId}`}>
                     <a>{v.userId} {v.title}</a>
                    </Link>
                </li>
               ))
                }
                </ul>
        </div>
    );
};

const url = "https://jsonplaceholder.typicode.com/todos";


export async function getStaticProps() {

    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}



export default Blogs;