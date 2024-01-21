import { ContainerIcon, ContainerMarqueee, ContentIten, ContentItenDesc } from "./styles.ts";
import * as Dialog from "@radix-ui/react-dialog";
import { ProjetoModal } from "../ProjetoModal";
import { ReactNode } from "react";



export interface CardProps {
    title: string;
    desc: ReactNode;
    video: string;
    skills: string[];
    img: string;
    link: string;
    git: string;
    linkedin: string;
    destaque: boolean;

}

export function CardList({ cards }: { cards: CardProps[] }) {

    return (
        <>
            {cards.map((card, index) => (
                <Dialog.Root key={index}>
                    <Dialog.Trigger asChild>
                        <ContentIten>
                            <img src={card.img} alt={`Imagem do projeto ${card.title}`} />
                            <ContentItenDesc>

                                <h3>{card.title}</h3>
                                <ContainerMarqueee>
                                    
                                   
                                    {card.skills.map((skill) => 
                                    (
                                    <ContainerIcon>
                                    <img src={`./assets/img/Skills/${skill}.svg`} alt={skill}/>
                                   <p>{skill}</p>
                                   </ContainerIcon>
                                    ))}

                                </ContainerMarqueee>
                            </ContentItenDesc>
                        </ContentIten>
                    </Dialog.Trigger>

                    {/*MODAL*/}
                    <ProjetoModal card={card} />

                </Dialog.Root>
            ))}
        </>

    );
}