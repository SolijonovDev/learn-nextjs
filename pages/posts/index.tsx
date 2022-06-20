import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { IPostItem } from "../../interface/post.type";
import { withLayout } from "../../Layout/Layout";



interface IPosts {
    data: IPostItem[];
}

const Posts: NextPage<IPosts> = ({ data }): JSX.Element => {
    return (
        <div>
            <Htag tag="h1">Posts page</Htag>
            <ul>
                {data.map(v => (
                    <li key={v.id}><A href={"/posts/" + v.id}>{v.id} userId: {v.userId}, title: {v.title}</A> </li>
                ))}
            </ul>
        </div>
    );
};



export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data } = await axios.get<IPostItem[]>("https://jsonplaceholder.typicode.com/posts");
        return {
            props: {
                data
            },
        };
    }
    catch (e) {
        return {
            notFound: true
        };
    }
};



export default withLayout(Posts);