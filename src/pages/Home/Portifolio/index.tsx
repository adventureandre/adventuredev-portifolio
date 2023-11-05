import {ContentCards, ContentTitle, PortifolioConteiner, PortifolioContent, PortifolioIcon} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";
import {CardList} from "../../../components/CardList";
import {Cards} from "../../../Dados.tsx";

export function Portifolio() {
    const destaques = Cards.filter(card => card.destaque);
    const outrosProjetos = Cards.filter(card => !card.destaque);

    return (
        <PortifolioConteiner id='portifolio'>
            <PortifolioIcon size={52}/>
            <SectionTitle>Portifólio</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>

            <PortifolioContent>
                <ContentTitle>Destaques:</ContentTitle>
                <ContentCards data-aos="fade-right">
                    <CardList cards={destaques}/>
                </ContentCards>
            </PortifolioContent>

            <PortifolioContent>
                <ContentTitle>Todos os projetos:</ContentTitle>
                <ContentCards data-aos="fade-right">
                    <CardList cards={outrosProjetos}/>
                </ContentCards>
            </PortifolioContent>

        </PortifolioConteiner>
    )
}