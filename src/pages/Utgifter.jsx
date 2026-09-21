import Graph from "../komponenter/Graph"
import Header from "../komponenter/Header"
import { Link } from "react-router-dom"

export default function Utgifter(){
    return(
        <>
            <Header isHome={false}/>
            <main>
                <Link to='/'>Back Home</Link>
                <h2>Utgifter per kategori</h2>
                <Graph/>
            </main>
        </>
    )
}
