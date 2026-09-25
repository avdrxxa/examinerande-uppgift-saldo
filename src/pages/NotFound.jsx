import Header from "../komponenter/Header"
import { Link } from "react-router-dom"

export default function Transaktioner(){
    return(
        <>
            <Header isHome={false}/>
            <main className="mainTrans">
                <Link className="a" to='/'>Back Home</Link>
                <h2>404 Not Found</h2>
                <p>Sidan finns inte.</p>
            </main>
        </>
    )
}