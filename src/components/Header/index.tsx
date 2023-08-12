import {HeaderConteiner, HeaderMenu, HeaderTitle} from "./styles.ts";

export function Header() {
    return (
        <HeaderConteiner>
            <HeaderTitle>ExpertDev</HeaderTitle>
            <HeaderMenu>
                <ul>
                    <li><a href="#bio">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#portifolio">PORTFOLIO</a></li>
                    <li><a href="#contatos">CONTATOS</a></li>
                </ul>
            </HeaderMenu>
        </HeaderConteiner>
    )
}