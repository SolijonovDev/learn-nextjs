import { NextPage } from "next";

interface IPost {
    id: number;
    userId: number;
    title: string;
}

interface IPosts {
    data: IPost[];
}

const Posts: NextPage<IPosts> = ({ data }) => {
    return (
        <div>
            <h1>Posts page</h1>
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



export default Posts;