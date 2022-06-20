import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { IUser } from "../../interface/user.type";
import { withLayout } from "../../Layout/Layout";


interface IUserCom {
    data: IUser
}

const User: NextPage<IUserCom> = ({ data }) => {
    return (
        <div>
            User
        </div>
    );
};


export default withLayout(User);


const url = "https://jsonplaceholder.typicode.com/users/";


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    const paths = data.map(v => "/users/" + v.id);
    return {
        paths,
        fallback: true
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