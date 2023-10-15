import {CardProps} from "./components/CardList";

export const Cards: CardProps[] = [
    {
        title: 'CafeControl',
        desc: (
            <>
                A aplicação "FSPHP" é um resultado excepcional da minha jornada de aprendizado na UpInside.
                <br/><br/>
                Neste curso, adquiri conhecimento em tecnologias como Banco de Dados usando PDO, Arquitetura MVC
                (Model-View-Controller), medidas contra ataques XSS e CSRF, modelagem de regras de negócio sólidas,
                conceitos de Webservice e REST API, entre outros.
                <br/><br/>
                Essa experiência me proporcionou um sólido entendimento das bases da programação e a capacidade de criar
                aplicações robustas e seguras.
            </>
        ),
        video: "uploads/videos/cafecontrol.mp4",
        skills: "PHP - MySql",
        img: "uploads/images/CafeControl.png",
        link: "https://cafecontrol.adventure.dev.br",
        git: "https://github.com/adventureandre",
        linkedin: "https://www.linkedin.com/in/adventureandre"

    },
    {
        title: "Ignite Timer",
        desc: (<>Nesse módulo iremos construir uma aplicação completa com roteamento e diversos conceitos importantes do
            ecossistema React como ContextAPI, useReducer, immer e muito mais.</>),
        git: "https://github.com/adventureandre/02-ignite-timer",
        link: "https://ignite-timer.adventure.dev.br",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: "React - ContextAPI - useReducer",
        img: "uploads/images/Ignite-timer.png",
        video: "uploads/videos/Ignite-timer.mp4"
    },
    {
        title: "DT-Money",
        desc: (<>Nesse módulo construiremos uma aplicação front-end web completa, conectando a uma API e veremos
            como performar aplicações com o React entendendo como funcionam os algoritmos
            internos da biblioteca e todo fluxo de renderização de componentes.</>),
        git: "https://github.com/adventureandre/03-dt-money",
        link: "#",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: "React - API - Renderização",
        img: "uploads/images/money.png",
        video: "uploads/videos/money.mp4"
    }
];