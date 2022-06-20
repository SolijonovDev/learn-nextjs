import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";
import { Ptag } from "../components/Ptag/Ptag";
import { Rating } from "../components/Rating/Rating";
import { Tag } from "../components/Tag/Tag";
import { MenuType } from "../interface/menu.type";
import { withLayout } from "../Layout/Layout";
import { Grid } from "../views/Grid/Grid";


const Home: NextPage<HomeProps> = ({ menu, firstCategory }): JSX.Element => {
    const [rating, setRating] = useState<number>(2);
    return (
        <div>
            <Htag tag="h1">Home page</Htag>
            <Grid />
            <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum harum, natus deleniti laborum molestias, impedit adipisci iure vitae excepturi expedita fugiat exercitationem aliquid molestiae atque voluptatibus omnis iste officia eos.</Ptag>
            {/* <div className="btns">
                    <Button appearance="primary">Kirish</Button>
                    <Button appearance="ghost">Kirish</Button>
                    <Button appearance="primary" arrow="right">Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>
                    <Button appearance="ghost" style={{ color: "yellow" }}>Kirish</Button>

                </div>
                <Ptag size="l" onClick={() => alert("click")}>hello world</Ptag>
                <Ptag> hi</Ptag>
                <Ptag size="s"> bye</Ptag>
                <Tag color="ghost">Tag ghost</Tag>
                <Tag color="blue">Tag blue</Tag>
                <Tag color="red">Tag red color</Tag> */}
                <ul>
                    {menu.map(v=>(
                        <li key={v._id.secondCategory}>{v._id.secondCategory}</li>
                    ))}
                </ul>
            <Rating isEditable rating={rating} setRating={setRating} />
        </div>
    );
};

export default withLayout(Home);



export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuType[]>("https://courses-top.ru/api/top-page/find", {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};



interface HomeProps extends Record<string, unknown> {
    menu: MenuType[];
    firstCategory: number;
}