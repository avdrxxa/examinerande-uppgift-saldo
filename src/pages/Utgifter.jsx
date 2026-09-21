import Graph from "../komponenter/Graph"
import Header from "../komponenter/Header"
import { Link } from "react-router-dom"

export default function Utgifter(){
    return(
        <>
            <Header isHome={false}/>
            <main className="mainUt">
                <Link className="a" to='/'>Back Home</Link>
                <h2 className="h2graph">Utgifter per kategori</h2>
                <Graph/>
            </main>
        </>
    )
}
