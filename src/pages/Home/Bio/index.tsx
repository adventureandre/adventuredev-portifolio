import {BioBox, BioConteiner, IconConteiner} from "./styles.ts";
import Avatar from "../../../assets/img/andre-avatar.jpg"
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
                    <GithubLogo size={40} weight='fill' className='icon'/>
                    <FacebookLogo size={40} weight='fill' className='icon'/>
                    <LinkedinLogo size={40} weight='fill' className='icon'/>
                    <InstagramLogo size={40} weight='fill' className='icon'/>
                </IconConteiner>
            </BioBox>
        </BioConteiner>
    )
}