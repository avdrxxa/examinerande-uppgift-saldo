import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function TransaktionerDiv(){
    let{transaktioner,kategoriLogos, valuta, konvertera}=useContext(BankAppContext)
    let senaste=[...transaktioner].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,4)
    return(
        <div className="transaktionerDiv">
            <h2>Senaste Transaktioner</h2>
            {senaste.map((trans,i)=>{
                let beloppConvert=konvertera(trans.belopp)
                let formuleradBelopp=beloppConvert.toLocaleString('sv-SV')
                let formuleradDatum=new Date(trans.date).toLocaleDateString('sv-SE',{day:'numeric',month:'short'})
                return(
                    <div className="radTrans" key={i}>
                        <img className="image" src={kategoriLogos[trans.kategori]} alt={trans.kategori}></img>
                        <div className="transInfo">
                            <div className="transNamn">{trans.name}</div>
                            <div className="transDatum">{formuleradDatum}</div>
                        </div>
                        <div className={`transBelopp ${trans.typ === 'inkomst' ? 'positiv' : 'negativ'}`}>{trans.typ === 'inkomst' ? '+' : '-'}{formuleradBelopp} {valuta}</div>
                    </div>
                )
            })}
        </div>
        )
}