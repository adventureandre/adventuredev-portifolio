import {Header} from "../../components/Header";
import {Bio} from "./Bio";
import {About} from "./About";
import {HomeConteinerBio} from "./styles.ts";
import {Skills} from "./Skills";
import {Portifolio} from "./Portifolio";
import {Contatos} from "./Contatos";


import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


export function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações em milissegundos
        });
    }, []);

    return (<>
            <HomeConteinerBio>
                <Header/>
                <Bio/>
            </HomeConteinerBio>
            <About/>
            <Skills/>
            <Portifolio/>
            <Contatos/>
        </>
    )
}