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
        skills: ["php", "mysql","html"],
        img: "uploads/images/CafeControl.png",
        link: "https://cafecontrol.adventure.dev.br",
        git: "https://github.com/adventureandre",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        destaque: true

    },
    {
        title: 'Design-System',
        desc: (
            <>
            A aplicação "Design-System" é o resultado excepcional da minha jornada de aprendizado na Rocketseat.
            <br /><br />
            Durante este curso, adquiri conhecimentos em tecnologias como React, MonoRepo, TurboRepo (incluindo o modo de deploy via GitHub),
            realização de deploy no GitHub e, adicionalmente, publicação do MonoRepo no Npm, além de aprender sobre conceitos fundamentais
            de Webservice e REST API, entre outros.
            <br /><br />
            Esta experiência proporcionou-me um entendimento sólido das bases de um Design System e a habilidade de criar
            componentes reutilizáveis, robustos e seguros.
          </>
          
        ),
        video: "uploads/videos/design-sistem.mp4",
        skills: ["react", "storybook"],
        img: "uploads/images/Design-System.png",
        link: "https://adventureandre.github.io/ADVFW-design-system/?path=/docs/home--docs",
        git: "https://github.com/adventureandre/ADVFW-design-system",
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
        skills: ["react", "api", "hook"],
        img: "uploads/images/Ignite-timer.png",
        video: "uploads/videos/Ignite-timer.mp4",
        destaque: false
    },
    {
        title: "DT-Money",
        desc: (<>Nesse módulo construiremos uma aplicação front-end web completa, conectando a uma API e veremos
            como performar aplicações com o React entendendo como funcionam os algoritmos
            internos da biblioteca e todo fluxo de renderização de componentes.</>),
        git: "https://github.com/adventureandre/03-dt-money",
        link: "#",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: ["react", "api", "html"],
        img: "uploads/images/money.png",
        video: "uploads/videos/money.mp4",
        destaque: false
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
        link: "",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: ["react",  "php",  "api"],
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
        skills: ["php", "css","javascript"],
        img: "uploads/images/Funilariaepintura.png",
        video: "uploads/videos/funilariaepintura.mp4",
        destaque: false
    },
    {
        title: "TODO-Ignite",
        desc: ( <>
            Este projeto foi criado como parte de um desafio do curso de React Native da Rocketseat, o Ignite. Desenvolvido utilizando a framework React Native, o TODO-Ignite é um aplicativo móvel que representa uma solução para um desafio específico proposto durante o curso.
            O desafio proporcionou uma oportunidade prática para aplicar os conhecimentos adquiridos ao longo do curso, abordando aspectos específicos do desenvolvimento de aplicativos móveis com React Native.
        </>),
        git: "https://github.com/adventureandre/tudo-reactnative-ignite",
        link: "",
        linkedin: "https://www.linkedin.com/in/adventureandre",
        skills: ["react-native","javascript"],
        img: "uploads/images/Todo-Ignite.png",
        video: "uploads/videos/Todo-ignite.mp4",
        destaque: false
    },
    {
        "title": "SHOP-Ignite",
        "desc": "Nesse módulo criamos um projeto completo com o framework Next.js. Utilizamos StitchesJS, passando por conceitos de SPA, server-side rendering (SSR) e static-site generation (SSG). Este projeto foi criado como parte do módulo de React JS da Rocketseat, o Ignite, mas foi desenvolvido utilizando o framework Next.js. O SHOP-Ignite foi uma aplicação web que representava uma solução para um desafio específico proposto durante o curso. O módulo proporcionou uma oportunidade prática para aplicar os conhecimentos adquiridos ao longo do curso, abordando aspectos específicos do desenvolvimento com React JS e Next.js.",
        "git": "https://github.com/adventureandre/IGNITE-SHOP-ROCKETSEAT",
        "link": "https://ignite-shop.adventure.dev.br/",
        "linkedin": "https://www.linkedin.com/in/adventureandre",
        "skills": ["next","stripe","api"],
        "img": "uploads/images/ignite-shop.png",
        "video": "uploads/videos/ignite-shop.mp4",
        "destaque": true
    },

    {
        "title": "Call-Ignite",
        "desc": "Utilizando Design System, criamos uma aplicação completa até o deploy. Abordaremos rotas autenticadas no Next.js, integração com Google Calendar, validações e muito mais!",
        "git": "https://github.com/adventureandre/06-ignite-call",
        "link": "https://ignitecall.adventure.dev.br/",
        "linkedin": "https://www.linkedin.com/in/adventureandre",
        "skills": ["next","prisma","api","vercel","neon"],
        "img": "uploads/images/ignite-call.png",
        "video": "uploads/videos/ignite-call.mp4",
        "destaque": true
    }
    
    
];
