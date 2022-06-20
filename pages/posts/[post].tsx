import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { Ptag } from "../../components/Ptag/Ptag";
import { IPostItem } from "../../interface/post.type";
import { withLayout } from "../../Layout/Layout";

interface IPost {
  data: IPostItem
}

const Post: NextPage<IPost> = ({ data }) => {
  return (
    <div>
      {
        data && <>
          <Htag tag="hi">Hello world</Htag>
          <Ptag>{data.title}</Ptag>
          <Ptag>{data.body}</Ptag>
          <A href="/posts">Back</A>
        </>
      }
    </div>
  );
};

export default withLayout(Post);

const url = "https://jsonplaceholder.typicode.com/posts/";



export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const { data } = await axios.get<IPostItem>(url + params.post);
  return {
    props: {
      data,
    },
  };
};
