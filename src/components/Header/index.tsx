import {HeaderConteiner, HeaderMenu, HeaderTitle} from "./styles.ts";

export function Header(){
    return(
        <HeaderConteiner>
            <HeaderTitle>André Luíz</HeaderTitle>
            <HeaderMenu>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>PORTFOLIO</li>
                    <li>CONTATOS</li>
                </ul>
            </HeaderMenu>
        </HeaderConteiner>
    )
}