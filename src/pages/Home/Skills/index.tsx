import {Cards, ItemBox, SkillIcon, SkillsConteiner, SkillTitle} from "./styles.ts";
import {IconMinus} from "../styles.ts";
import iconHtml from '../../../assets/img/Skills/html.svg';
import iconCss from '../../../assets/img/Skills/css.svg';
import iconJs from '../../../assets/img/Skills/javascript.svg';
import iconTs from '../../../assets/img/Skills/typescript.svg';
import iconReact from '../../../assets/img/Skills/react.svg';
import iconNext from '../../../assets/img/Skills/next.svg';
import iconRedux from '../../../assets/img/Skills/redux.svg';
import iconPhp from '../../../assets/img/Skills/php.svg';


export function Skills() {
    return (
        <SkillsConteiner id='skills'>
            <SkillIcon size={80}/>
            <SkillTitle>Habilidades</SkillTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>

            <Cards>
                <ItemBox>
                    <span>HTML5</span>
                    <img src={iconHtml} alt="html"/>
                </ItemBox>
                <ItemBox>
                    <span>CSS3</span>
                    <img src={iconCss} alt="Css3"/>
                </ItemBox>
                <ItemBox>
                    <span>JavaScript</span>
                    <img src={iconJs} alt="JavaScript"/>
                </ItemBox>
                <ItemBox>
                    <span>TypeScript</span>
                    <img src={iconTs} alt="TypeScript"/>
                </ItemBox>
                <ItemBox>
                    <span>React</span>
                    <img src={iconReact} alt="react"/>
                </ItemBox>
                <ItemBox>
                    <span>Next</span>
                    <img src={iconNext} alt="next"/>
                </ItemBox>
                <ItemBox>
                    <span>Redux</span>
                    <img src={iconRedux} alt="redux"/>
                </ItemBox>
                <ItemBox>
                    <span>PHP</span>
                    <img src={iconPhp} alt="php"/>
                </ItemBox>
            </Cards>
        </SkillsConteiner>
    )

}