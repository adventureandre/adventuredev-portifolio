import {PortifolioConteiner, PortifolioDestaque, PortifolioIcon} from "./styles.ts";
import {IconMinus, SectionTitle} from "../styles.ts";

export function Portifolio() {
    return (
        <PortifolioConteiner id='portifolio'>
            <PortifolioIcon size={52}/>
            <SectionTitle>Portifolio</SectionTitle>
            <IconMinus size={65}/>
            <IconMinus size={30}/>

            <PortifolioDestaque>
                <h2>Destaques</h2>
                <ul>
                    <li>
                        <article>
                            <h3>CafeControl</h3>
                            <ul>
                                <li>react</li>
                                <li>ts</li>
                                <li>styed</li>
                            </ul>
                        </article>
                    </li>
                </ul>

            </PortifolioDestaque>

        </PortifolioConteiner>
    )
}