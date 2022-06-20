import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { Ptag } from "../../components/Ptag/Ptag";
import { IBlogItem } from "../../interface/blog.type";
import { withLayout } from "../../Layout/Layout";

interface IBlog {
    data: IBlogItem
}

const Blog: NextPage<IBlog> = ({ data }) => {
    return (
        <div>
            {
                data && <>
                    <Htag tag="h1">{data.id}</Htag>
                    <Ptag>{data.title}</Ptag>
                    {data.completed ? <Ptag>Completed</Ptag> : <Ptag>No completed</Ptag>}
                    <Htag tag="h2">Blog page</Htag>
                    <A href="/blogs">Back</A>
                </>
            }
        </div>

    );
};


export default withLayout(Blog);

const url = "https://jsonplaceholder.typicode.com/todos/";

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get<IBlogItem[]>(url);
    const paths = data.map((post) => "/blogs/" + post.id);
    return { paths, fallback: true };
};



export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    try {
        if (!params) {
            return {
                notFound: true
            };
        }
        const { data } = await axios.get<IBlogItem>(url + params.blog);
        return { props: { data } };
    } catch (e) {
        return {
            notFound: true
        };
    }
};