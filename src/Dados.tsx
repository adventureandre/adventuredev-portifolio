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
        linkedin: "https://www.linkedin.com/in/adventureandre",
        destaque: true

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
        video: "uploads/videos/Ignite-timer.mp4",
        destaque: true
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
        video: "uploads/videos/money.mp4",
        destaque: true
    },
    {
        title: "CP-Peças",
        desc: (<>Este projeto envolve o desenvolvimento de um site de vendas de peças automotivas, que está sendo criado
            com a tecnologia React. O site se destaca por sua integração com uma API construída em PHP, utilizando as
            mais recentes práticas e métodos. Nossa equipe está empenhada em oferecer uma experiência de compra
            excepcional, proporcionando aos clientes uma plataforma intuitiva e eficiente para encontrar as peças que
            precisam. O uso das tecnologias mais recentes e da integração de APIs garante que nosso site
            de vendas de peças esteja na vanguarda da inovação e pronto para atender às necessidades do mercado
            automotivo.</>),
        git: "https://github.com/adventureandre/",
        link: "#",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: "React,PHP - API- REST",
        img: "uploads/images/CP.png",
        video: "uploads/videos/CP.mp4",
        destaque: false
    },
    {
        title: "Funilaria e Pintura",
        desc: (<>Este projeto representa a criação de um site para uma empresa de funilaria e pintura de automóveis, que
            foi desenvolvido há bastante tempo. O site, construído com PHP utilizando Programação Orientada a Objetos
            (OOP), mantém sua solidez e eficácia ao longo dos anos. Uma característica notável deste projeto é o painel
            administrativo, que permite a gestão completa do conteúdo, tornando o site dinâmico e facilmente adaptável.
            Mesmo após um longo período de existência, a aplicação continua a fornecer uma plataforma eficaz para a
            empresa exibir seus serviços e expertise em funilaria e pintura automotiva, demonstrando sua durabilidade e
            qualidade..</>),
        git: "https://github.com/adventureandre/",
        link: "https://www.funilariaepintura.com.br/",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: "PHP - OOP",
        img: "uploads/images/Funilariaepintura.png",
        video: "uploads/videos/funilariaepintura.mp4",
        destaque: false
    }
];