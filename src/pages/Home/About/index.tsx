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
    <AboutDescDestaque>Olá! Eu sou André Luíz,</AboutDescDestaque> Desenvolvedor de Software desde 2012, mergulhando inicialmente no universo do PHP. Desde então, trilhei uma jornada de aprimoramento contínuo, expandindo meu conhecimento e habilidades para abranger um amplo espectro de tecnologias, destacando-se {" "}
    <AboutDescDestaque>
        React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Stitches, Prisma, Storybook, além do PHP.{" "} 
    </AboutDescDestaque>
    Minha paixão pela programação é incessante, impulsionando-me a uma busca constante por inovação e excelência. Com uma sólida bagagem em metodologias ágeis, como Scrum e Kanban, estou preparado para enfrentar desafios e entregar soluções de alta qualidade de forma eficiente e colaborativa.
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
