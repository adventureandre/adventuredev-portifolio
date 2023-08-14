import {CardProps} from "./components/CardList";

export const Cards: CardProps[] = [
    {
        title: 'CafeControl',
        desc: (
            <>
                The Movie Guide é uma aplicação que reúne informações sobre artistas e produções, permitindo que
                usuários pesquisem e avaliem seus filmes favoritos, além de personalizar seu próprio perfil.
                <br/><br/>
                Tive muita inspiração de sites como Letterboxd e Filmow, dos quais sou usuário assíduo há anos. Mas
                a ideia surgiu mesmo do Desafio Front-End da Promobit localizado no repositório do Felipe Fialho,
                onde cumpri os requisitos apontados e fui além criando novas features, como:
                <br/><br/>
                • Realizar upload de Imagens;<br/>
                • Avaliar e catalogar filmes favoritos/já assistidos;<br/>
                • Barra de pesquisa que busca por títulos e artistas simultaneamente;<br/>
                • Animações com a biblioteca Framer Motion;<br/>
                • Rotas dinâmicas com React Router Dom;<br/>
                • Filtro acumulativo de gêneros;<br/><br/>
                No desenvolvimento decidi utilizar o Vite.js como Build Tool pelo desempenho, Redux pro
                gerenciamento e armazenamento de Estados Globais, Styled Components pelos diversos benefícios do
                CSS-in-JS, TypeScript por facilitar na hora de fazer depuração no código e o React Router Dom pra
                manipulação de rotas;
                <br/><br/>
                Foram longas horas de desenvolvimento, e sinto que esse projeto serviu pra consolidar tudo que
                aprendi nesses últimos meses estudando React.js :)
            </>
        ),
        video: "https://streamable.com/e/bgp1db",
        skills: "PHP - MySql",
        img: "src/uploads/CafeControl.png",
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
        img: "src/uploads/Ignite-timer.png",
        video: "https://streamable.com/e/ohsnpv"
    }
];