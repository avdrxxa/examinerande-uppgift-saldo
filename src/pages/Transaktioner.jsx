
import Header from "../komponenter/Header"
import AllaTransaktioner from "../komponenter/AllaTransaktioner"
export default function Transaktioner(){
    return(
        <>
            <Header isHome={false}/>
            <main>
                <h2>Senaste transaktioner</h2>
                <AllaTransaktioner/>
            </main>
        </>
    )
}