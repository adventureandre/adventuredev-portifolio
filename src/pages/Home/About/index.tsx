import {AboutConteiner, AboutDesc, AboutDescDestaque, AboutIcon, Curriculo} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";
import {Download} from "phosphor-react";
import CurriculoPDF from "../../../assets/Curriculo.pdf";

export function About() {
    return (
        <AboutConteiner id="about">
            <AboutIcon size={80} weight="fill"/>
            <SectionTitle>Sobre mim</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>
            <AboutDesc>
                <AboutDescDestaque>Ola! Sou André Luíz</AboutDescDestaque>, Desenvolvedor
                Front-end com experiência em{" "}
                <AboutDescDestaque>
                    React.js, Next.js, Redux, JavaScript, TypeScript, PHP, Styled
                    Components, Material UI e consumo de APIs REST
                </AboutDescDestaque>
                . Um entusiasta da programação e apaixonado por criar aplicações web
                inovadoras. Tenho vasta experiência no desenvolvimento de soluções
                escaláveis e eficientes, utilizando tecnologias de ponta para proporcionar
                a melhor experiência aos usuários.
            </AboutDesc>
            <Curriculo
                href={CurriculoPDF}
                target="_blank"
                rel="noopener noreferrer"
            >
                Download CV{" "}
                <Download size={15} weight="bold"/>
            </Curriculo>
        </AboutConteiner>
    );
}
