import Head from "next/head";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container";
import { Htag } from "../components/Htag/Htag";
import { Ptag } from "../components/Ptag/Ptag";
import { Tag } from "../components/Tag/Tag";


const Home = (): JSX.Element => {
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
            </div>
        </Container>
    );
};

export default Home;