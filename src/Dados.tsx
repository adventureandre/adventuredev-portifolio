import {CardProps} from "./components/CardList";

export const Cards: CardProps[] = [
    {
        title: 'CafeControl',
        desc: (
            <>
                A aplicação "FSPHP" é um resultado excepcional da jornada de aprendizado na UpInside.
                <br/><br/>
                Neste curso, tive a valiosa oportunidade de adquirir conhecimento em uma variedade de tecnologias,
                incluindo:
                <br/><br/>
                • Banco de Dados usando PDO;<br/>
                • Arquitetura MVC (Model-View-Controller);<br/>
                • Implementação de medidas contra ataques XSS e CSRF;<br/>
                • Modelagem de regras de negócio sólidas;<br/>
                • Exploração de conceitos de Webservice e REST API;<br/><br/>
                Ao longo do curso, adquiri um profundo conhecimento técnico e a habilidade de programar a partir do
                zero. Aprendi a fundação essencial que torna possível construir qualquer framework PHP e aprofundei
                minha compreensão do desenvolvimento web.
                <br/><br/>
                Essa experiência me proporcionou um sólido entendimento das bases da programação e a capacidade de criar
                aplicações robustas e seguras. Pude testemunhar o poder de construir soluções personalizadas, desde as
                estruturas até os detalhes finos, ao invés de depender apenas de frameworks prontos.
                <br/><br/>
                As inúmeras horas dedicadas ao desenvolvimento dessa aplicação foram uma jornada de aprendizado e
                crescimento. Tenho a convicção de que este projeto serviu como um marco para consolidar todos os
                conhecimentos adquiridos durante os últimos meses de estudo de PHP.

            </>
        ),
        video: "https://streamable.com/e/ssbpl3",
        skills: "PHP - MySql",
        img: "uploads/CafeControl.png",
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
        img: "uploads/Ignite-timer.png",
        video: "https://streamable.com/e/ohsnpv"
    }, {
        title: "DT-Money",
        desc: (<>Nesse módulo construiremos uma aplicação front-end web completa, conectando a uma API e veremos
            como performar aplicações com o React entendendo como funcionam os algoritmos
            internos da biblioteca e todo fluxo de renderização de componentes.</>),
        git: "https://github.com/adventureandre/03-dt-money",
        link: "#",
        linkedin: "",
        skills: "React - API - Renderização",
        img: "uploads/DT-money.png",
        video: "https://streamable.com/e/vw52ae"
    }
];