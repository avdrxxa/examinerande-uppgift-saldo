import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function TransaktionerDiv(){
    let{transaktioner}=useContext(BankAppContext)
    let senaste=[...transaktioner].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,4)
    return(
        <div className="transaktionerDiv">
            <h2>Senaste Transaktioner</h2>
            {senaste.map((trans,i)=>(
                <div className="radTrans" key={i}>
                    <div className="image">O</div>
                    <div className="transInfo">
                        <div className="transNamn">{trans.name}</div>
                        <div className="transDatum">{new Date(trans.date).toLocaleDateString('sv-SE',{day:'numeric', month:'short'})}</div>
                    </div>
                    <div className={`transBelopp ${trans.typ === 'inkomst' ? 'positiv' : 'negativ'}`}>{trans.typ === 'inkomst' ? '+' : '-'}{trans.belopp.toLocaleString('sv-SE')}</div>
                </div>
            ))}
        </div>
        )
}