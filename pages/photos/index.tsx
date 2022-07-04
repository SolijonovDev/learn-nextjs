import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { Htag } from "../../components/Htag/Htag";
import { withLayout } from "../../Layout/Layout";

interface IPhotoItem {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string;
}
interface IPhotos {
    data: IPhotoItem[];
}

export const Photos: NextPage<IPhotos> = ({ data }) => {
    return (
        <div>
            <Htag tag="h1">photo page</Htag>
            <ul>
                {data.map(v => (
                    <div key={v.albumId+v.id}>
                        <img
                            src={v.url}
                            width={70} height={70}
                            alt="photo" />
                    </div>
                ))}
            </ul>
        </div>
    );
};


export default withLayout(Photos);


export const getStaticProps: GetStaticProps = async () => {
    const { data } = await axios.get<IPhotoItem[]>("https://jsonplaceholder.typicode.com/photos");

    return {
        props: {
            data
        }
    };
};
