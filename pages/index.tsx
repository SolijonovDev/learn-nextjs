import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container";
import { Htag } from "../components/Htag/Htag";
import { Ptag } from "../components/Ptag/Ptag";
import { Rating } from "../components/Rating/Rating";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../Layout/Layout";


const Home = (): JSX.Element => {
    const [rating,setRating]=useState<number>(2);
    return (
        <Container>
            <Head>
                <title>Home page</title>
            </Head>
            <div>
               
                <Htag tag="h1">Home page</Htag>
                <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum harum, natus deleniti laborum molestias, impedit adipisci iure vitae excepturi expedita fugiat exercitationem aliquid molestiae atque voluptatibus omnis iste officia eos.</Ptag>
                <div className="btns">
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
                <Tag color="red">Tag red color</Tag>
                <Rating isEditable rating={rating} setRating={setRating}/>
            </div>
        </Container>
    );
};

export default withLayout(Home);