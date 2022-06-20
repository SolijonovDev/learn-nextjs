import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { IBlogItem } from "../../interface/blog.type";
import { withLayout } from "../../Layout/Layout";


type BlogsType = {
    data: IBlogItem[]
};

const Blogs: NextPage<BlogsType> = ({ data }) => {
    console.log(process.env.NEXT_PUBLIC_DOMAIN);
    console.log(process.env.NODE_ENV);
    return (
        <div>
            <Htag tag="h1">blogs page</Htag>
            <ul>
                {
                    data.map(v => (
                        <li key={v.userId + v.title}>
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


export const getStaticProps: GetStaticProps = async () => {
    const {data} = await axios.get<IBlogItem[]>(url);
    return {
        props: {
            data
        },
    };
};


export default withLayout(Blogs);