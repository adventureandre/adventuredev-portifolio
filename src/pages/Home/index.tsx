import {Header} from "../../components/Header";
import {Bio} from "./Bio";
import {About} from "./About";
import {HomeConteinerBio} from "./styles.ts";
import {Skills} from "./Skills";

export function Home() {
    return (<>
            <HomeConteinerBio>
                <Header/>
                <Bio/>
            </HomeConteinerBio>
            <About/>
            <Skills/>
        </>
    )
}