import { NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { withLayout } from "../../Layout/Layout";

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
            <Htag tag="h1">blogs page</Htag>
            <ul>
                {
               data.map(v=>(
                <li key={v.userId+v.title}>
                    <A href={`/blogs/${v.userId}`}>
                     {v.userId} {v.title}
                    </A>
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



export default withLayout(Blogs);