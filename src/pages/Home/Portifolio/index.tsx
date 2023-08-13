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

            <PortifolioContent>
                <ContentTitle>Destaques:</ContentTitle>
                <ContentCards data-aos="fade-right">
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