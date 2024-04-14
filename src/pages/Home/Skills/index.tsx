import {Cards, ItemBox, SkillIcon, SkillsConteiner} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";


export function Skills() {
    return (
        <SkillsConteiner id='skills'>

            <SkillIcon size={80}/>
            <SectionTitle>Habilidades</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>

            <Cards data-aos="fade-right">
                <ItemBox>
                    <span>HTML5</span>
                    <img src='../../../assets/img/Skills/html.svg' alt="html"/>
                </ItemBox>
                <ItemBox>
                    <span>CSS3</span>
                    <img src='../../../assets/img/Skills/css.svg' alt="Css3"/>
                </ItemBox>
                <ItemBox>
                    <span>JavaScript</span>
                    <img src='../../../assets/img/Skills/javascript.svg' alt="JavaScript"/>
                </ItemBox>
                <ItemBox>
                    <span>TypeScript</span>
                    <img src='../../../assets/img/Skills/typescript.svg' alt="TypeScript"/>
                </ItemBox>
                <ItemBox>
                    <span>React</span>
                    <img src='../../../assets/img/Skills/react.svg' alt="react"/>
                </ItemBox>
                <ItemBox>
                    <span>Next</span>
                    <img src='../../../assets/img/Skills/next.svg' alt="next"/>
                </ItemBox>
                <ItemBox>
                    <span>Stripe</span>
                    <img src='../../../assets/img/Skills/stripe.svg' alt="stripe"/>
                </ItemBox>
                <ItemBox>
                    <span>Redux</span>
                    <img src='../../../assets/img/Skills/redux.svg' alt="redux"/>
                </ItemBox>
                <ItemBox>
                    <span>ReactQuery</span>
                    <img src='../../../assets/img/Skills/reactquery.svg' alt="react-query"/>
                </ItemBox>
                <ItemBox>
                    <span>PHP</span>
                    <img src='../../../assets/img/Skills/php.svg' alt="php"/>
                </ItemBox>
                <ItemBox>
                    <span>TailwindCss</span>
                    <img src='../../../assets/img/Skills/tailwindcss.svg' alt="TailwindCss"/>
                </ItemBox>
                <ItemBox>
                    <span>Material UI</span>
                    <img src='../../../assets/img/Skills/materialui.svg' alt="Material UI"/>
                </ItemBox>
                <ItemBox>
                    <span>Figma</span>
                    <img src='../../../assets/img/Skills/figma.svg' alt="figma"/>
                </ItemBox>
            </Cards>
        </SkillsConteiner>
    )

}