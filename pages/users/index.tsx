import { GetStaticPropsContext, NextPage } from "next";
import { Htag } from "../../components/Htag/Htag";
import { withLayout } from "../../Layout/Layout";

interface dataType {
    id: number;
    name: string;
    username: string;
}

interface IUsers {
    data: dataType[]
}

const Users: NextPage<IUsers> = ({ data }): JSX.Element => {
    return (
        <div>
            <Htag tag="h1">User page</Htag>
            <ul>
                {
                    data.map(v => (
                        <li key={v.id + v.username}>id: {v.id}, Name: {v.name}, username: {v.username}</li>
                    ))
                }
            </ul>
        </div>
    );
};

const url = "https://jsonplaceholder.typicode.com/users";


export async function getStaticProps(context: GetStaticPropsContext) {
    console.log(context);
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}



export default withLayout(Users);