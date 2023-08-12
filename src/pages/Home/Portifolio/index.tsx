import {
    DestaqueCards,
    DestaqueIten,
    DestaqueItenDesc,
    DestaqueTitle,
    PortifolioConteiner,
    PortifolioDestaque,
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

            <PortifolioDestaque data-aos="fade-left">
                <DestaqueTitle>Destaques:</DestaqueTitle>
                <DestaqueCards>

                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>
                    <DestaqueIten>
                        <img src="src/uploads/themovieguide.jpg" alt="imagen do projeto"/>
                        <DestaqueItenDesc>
                            <h3>CafeControl</h3>
                            <p>React ts JavaScript</p>
                        </DestaqueItenDesc>
                    </DestaqueIten>

                </DestaqueCards>

            </PortifolioDestaque>

        </PortifolioConteiner>
    )
}