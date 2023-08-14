import {ContentIten, ContentItenDesc} from "./styles.ts";
import * as Dialog from "@radix-ui/react-dialog";
import {ProjetoModal} from "../ProjetoModal";
import {ReactNode} from "react";

export interface CardProps {
    title: string;
    desc: ReactNode;
    video: string;
    skills: string;
    img: string;
    link: string;
    git: string;
    linkedin: string;

}

export function CardList({cards}: { cards: CardProps[] }) {
    return (
        <>
            {cards.map((card, index) => (
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <ContentIten key={index}>
                            <img src={card.img} alt={`Imagem do projeto ${card.title}`}/>
                            <ContentItenDesc>

                                <h3>{card.title}</h3>
                                <p>{card.skills}</p>
                            </ContentItenDesc>
                        </ContentIten>
                    </Dialog.Trigger>

                    {/*MODAL*/}
                    <ProjetoModal card={card}/>

                </Dialog.Root>
            ))}
        </>

    );
}