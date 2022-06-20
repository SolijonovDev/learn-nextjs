import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { A } from "../../components/A/A";
import { Htag } from "../../components/Htag/Htag";
import { Ptag } from "../../components/Ptag/Ptag";
import { IUser } from "../../interface/user.type";
import { withLayout } from "../../Layout/Layout";


interface IUserCom {
    data: IUser
}

const User: NextPage<IUserCom> = ({ data }) => {
    return (
        <div>
            <>
                <Htag tag="h1">User page</Htag>
                <Ptag>{data.id}</Ptag>
                <Ptag>{data.company.name}</Ptag>
                <Ptag>{data.company.bs}</Ptag>
                <Ptag>{data.email}</Ptag>
                <Ptag>{data.phone}</Ptag>
                <Ptag>{data.website}</Ptag>
                <Ptag>{data.address.city}</Ptag>
            </>
            <A href="/users">Back</A>
        </div>
    );
};


export default withLayout(User);


const url = "https://jsonplaceholder.typicode.com/users/";


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:[],
        fallback: "blocking"
    };
};


export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const { data } = await axios.get<IUser>(url + params.user);
    return {
        props: {
            data
        }
    };
};