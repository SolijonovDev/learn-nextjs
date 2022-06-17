import { NextPage } from "next";
import { Htag } from "../../components/Htag/Htag";
import { withLayout } from "../../Layout/Layout";

interface IPost {
    id: number;
    userId: number;
    title: string;
}

interface IPosts {
    data: IPost[];
}

const Posts: NextPage<IPosts> = ({ data }):JSX.Element => {
    return (
        <div>
            <Htag tag="h1">Posts page</Htag>
            <ul>
                {data.map(v=>(
                    <li key={v.id}>{v.id} userId: {v.userId}, title: {v.title} </li>
                ))}
            </ul>
        </div>
    );
};



export async function getStaticProps(context) {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}



export default withLayout(Posts);