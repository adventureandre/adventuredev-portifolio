import {Header} from "../../components/Header";
import {HomeConteinerBio} from "./styles.ts";
import {Bio} from "./Bio";
import {About} from "./About";

export function Home() {
    return (
        <HomeConteinerBio>
            <Header/>
            <Bio/>
            <About/>
        </HomeConteinerBio>
    )
}