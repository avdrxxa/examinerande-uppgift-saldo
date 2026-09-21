
import Header from "../komponenter/Header"
import AllaTransaktioner from "../komponenter/AllaTransaktioner"
import { Link } from "react-router-dom"

export default function Transaktioner(){
    return(
        <>
            <Header isHome={false}/>
            <main className="mainTrans">
                <Link className="a" to='/'>Back Home</Link>
                <h2>Senaste transaktioner</h2>
                <AllaTransaktioner/>
            </main>
        </>
    )
}