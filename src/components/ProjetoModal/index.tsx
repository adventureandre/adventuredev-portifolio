import * as Dialog from "@radix-ui/react-dialog";
import {
    CloseButton,
    Content,
    ContentDesc,
    ContentTitle,
    DescricaoScrollable,
    Overlay,
    VideoConteiner
} from "./styles.ts";
import { CardProps } from "../CardList";
import { X } from "phosphor-react";


export function ProjetoModal({ card }: { card: CardProps }) {

    function Descricao() {
        return (
            <DescricaoScrollable>
                <p>{card.desc}</p>
            </DescricaoScrollable>
        )
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <VideoConteiner>
                    {card.video && (
                        <video controls>
                            {card.video.endsWith('.webm') && <source src={card.video} type="video/webm" />}
                            {card.video.endsWith('.mp4') && <source src={card.video} type="video/mp4" />}
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    )}

                    {/*<iframe src={card.video} frameBorder="0" allowFullScreen></iframe>*/}
                    <div>
                        {card.link && <a href={card.link} target="_blank" className="link-project">Acessar projeto</a>}
                        {card.git && <a href={card.git} target="_blank" className="link-repository">Acessar repositório</a>}
                        {card.linkedin && <a href={card.linkedin} target="_blank" className="link-linkedin">Ver post no Linkedin</a>}
                    </div>
                </VideoConteiner>

                <ContentDesc>
                    <ContentTitle>{card.title}</ContentTitle>

                    <Descricao />

                </ContentDesc>
                <CloseButton><X size={25} /></CloseButton>
            </Content>
        </Dialog.Portal>
    )
}