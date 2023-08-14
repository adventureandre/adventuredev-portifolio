import * as Dialog from "@radix-ui/react-dialog";
import {CloseButton, Content, ContentDesc, ContentTitle, Overlay, VideoConteiner} from "./styles.ts";
import {CardProps} from "../CardList";
import {X} from "phosphor-react";


export function ProjetoModal({card}: { card: CardProps }) {
    function Descricao() {
        return <p>{card.desc}</p>
    }

    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <VideoConteiner>
                    <iframe src={card.video} frameBorder="0" allowFullScreen></iframe>
                    <div>
                        <a href={card.link} target="_blank" className="link-project">Acessar projeto</a>
                        <a href={card.git} target="_blank" className="link-repository">Acessar repositório</a>
                        <a href={card.linkedin} target="_blank" className="link-linkedin">Ver post no Linkedin</a>

                    </div>
                </VideoConteiner>

                <ContentDesc>
                    <ContentTitle>{card.title}</ContentTitle>

                    <Descricao/>

                </ContentDesc>
                <CloseButton><X size={20}/></CloseButton>
            </Content>
        </Dialog.Portal>
    )
}