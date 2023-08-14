import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {Content, MenuItem} from "./styles.ts";

export function MenuMobile() {
    return (
        <DropdownMenu.Portal>
            <Content>
                <MenuItem className="DropdownMenuItem">
                    <a href="#bio">HOME</a>
                </MenuItem>
                <MenuItem className="DropdownMenuItem">
                    <a href="#about">ABOUT</a>
                </MenuItem>
                <MenuItem className="DropdownMenuItem">
                    <a href="#skills">SKILLS</a>
                </MenuItem>
                <MenuItem className="DropdownMenuItem">
                    <a href="#portifolio">PORTFÓLIO</a>
                </MenuItem>
                <MenuItem className="DropdownMenuItem">
                    <a href="#contatos">CONTATOS</a>
                </MenuItem>
            </Content>
        </DropdownMenu.Portal>

    )

}