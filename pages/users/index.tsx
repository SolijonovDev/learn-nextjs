import { GetStaticPropsContext, NextPage } from "next";

type dataType={
    id:number;
    name:string;
    username:string;
}

interface IUsers{
    data:dataType[]
}

const Users: NextPage<IUsers> = ({data}) => {
    return (
        <div>
            <h1>User page</h1>
            <ul>
                {
                    data.map(v=>(
                        <li key={v.id+v.username}>id: {v.id}, Name: {v.name}, username: {v.username}</li>
                    ))
                }
            </ul>
        </div>
    );
};

const url = "https://jsonplaceholder.typicode.com/users";


export async function getStaticProps(context:GetStaticPropsContext) {
    console.log(context);
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}



export default Users;