import {
    ContentCards,
    ContentIten,
    ContentItenDesc,
    ContentTitle,
    PortifolioConteiner,
    PortifolioContent,
    PortifolioIcon
} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";

export function Portifolio() {
    return (
        <PortifolioConteiner id='portifolio'>
            <PortifolioIcon size={52}/>
            <SectionTitle>Portifolio</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>

            <PortifolioContent data-aos="fade-left">
                <ContentTitle>Destaques:</ContentTitle>
                <ContentCards>
                    <ContentIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <ContentItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </ContentItenDesc>
                    </ContentIten>
                </ContentCards>

            </PortifolioContent>

            <PortifolioContent data-aos="fade-left">
                <ContentTitle>Todos os projetos:</ContentTitle>
                <ContentCards>
                    <ContentIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <ContentItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </ContentItenDesc>
                    </ContentIten>
                    <ContentIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <ContentItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </ContentItenDesc>
                    </ContentIten>
                    <ContentIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <ContentItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </ContentItenDesc>
                    </ContentIten>
                </ContentCards>

            </PortifolioContent>

        </PortifolioConteiner>
    )
}