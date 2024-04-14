import {BioBox, BioConteiner, IconConteiner} from "./styles.ts";
import Avatar from "../../../assets/andre-avatar.jpg"
import Typewriter from "../../../components/TypeWriter";
import {FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo} from "phosphor-react";

export function Bio() {
    return (
        <BioConteiner id='bio'>
            <BioBox>
                <img src={Avatar} alt=""/>

                <Typewriter className='profile_name' text="André Luíz" delay={180} element='h1'/>
                <Typewriter className='profile_desc' text="Desenvolvedor FullStack" delay={90} element='span'/>
                <IconConteiner>
                    <a href="https://github.com/adventureandre" target="_blank" rel="noopener noreferrer">
                        <GithubLogo size={40} weight='fill' className='icon'/>
                    </a>
                    <a href="URL_DO_SEU_PERFIL_NO_FACEBOOK" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={40} weight='fill' className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/adventureandre" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={40} weight='fill' className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/adventureandre" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={40} weight='fill' className='icon'/>
                    </a>
                </IconConteiner>
            </BioBox>
        </BioConteiner>
    )
}