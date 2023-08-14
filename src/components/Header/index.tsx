import {HeaderConteiner, HeaderMenu, HeaderTitle, MenuIcon} from "./styles.ts";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {MenuMobile} from "../MenuMobile";


export function Header() {
    return (
        <HeaderConteiner>
            <HeaderTitle>ExpertDev</HeaderTitle>
            <HeaderMenu>
                <ul>
                    <li><a href="#bio">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#portifolio">PORTFÓLIO</a></li>
                    <li><a href="#contatos">CONTATOS</a></li>
                </ul>
            </HeaderMenu>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <MenuIcon size={60}/>
                </DropdownMenu.Trigger>
                <MenuMobile/>
            </DropdownMenu.Root>

        </HeaderConteiner>
    )
}