import {ContatoBox, ContatosConteiner, ContatosContent, ContatosIcon} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";
import {Envelope, GithubLogo, LinkedinLogo, PhoneCall} from "phosphor-react";

export function Contatos() {
    return (
        <ContatosConteiner id='contatos'>
            <ContatosIcon size={52}/>
            <SectionTitle>Contatos</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>
            <ContatosContent data-aos="fade-right">
                <ContatoBox href="https://github.com/adventureandre" target="_blank">
                    <GithubLogo className='icon' size={52}/>
                    <h3>GitHub</h3>
                    <p>@adventureandre</p>
                </ContatoBox>

                <ContatoBox
                    href="https://api.whatsapp.com/send?phone=5562996106990&text=Ol%C3%A1%20%20Andr%C3%A9%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20AdventureDev"
                    target="_blank">
                    <PhoneCall className='icon' size={52}/>
                    <h3>Telefone</h3>
                    <p>(62)99610-6990</p>
                </ContatoBox>

                <ContatoBox href="https://www.linkedin.com/in/adventureandre/" target="_blank">
                    <LinkedinLogo className='icon' size={52}/>
                    <h3>Linkedin</h3>
                    <p>@adventureandre</p>
                </ContatoBox>

                <ContatoBox href="mailto:admin@adventure.dev.br" target="_blank">
                    <Envelope className='icon' size={52}/>
                    <h3>E-mail</h3>
                    <p>Admin@adventure.dev.br</p>
                </ContatoBox>

            </ContatosContent>
        </ContatosConteiner>
    )
}