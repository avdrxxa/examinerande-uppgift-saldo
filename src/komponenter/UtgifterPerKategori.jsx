import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function UtgifterPerKategori(){
    let{utgifter}=useContext(BankAppContext)
    let kategoriToatler={}
    utgifter.forEach(u=>{
        kategoriToatler[u.kategori]=(kategoriToatler[u.kategori]||0)+u.belopp
    })
    let totalUtgifter=Object.values(kategoriToatler).reduce((sum,val)=>sum+val, 0)
    return(
        <div className="kategorierDiv">
            <h2>Utgifter per kategori</h2>
            {Object.entries(kategoriToatler).map(([kategori,belopp])=>{
                let procent=(belopp/totalUtgifter)*100
                return(
                    <div className="kategoriRad" key={kategori}>
                        <div className="kategoriNamn">{kategori}</div>
                            <div className="barBakgrund">
                                <div className="självaBaren"
                                style={{ width: `${procent}%` }}>
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
        )
}