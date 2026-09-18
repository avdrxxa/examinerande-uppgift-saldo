import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"
import Transaktion from "./Transaktion"

export default function AllaTransaktioner(){
    let{transaktioner}=useContext(BankAppContext)
    let senaste=[...transaktioner].sort((a,b)=>new Date(b.date)-new Date(a.date))
    return(
            <div className="transaktionerDiv">
                {senaste.map((trans,i)=>{
                    return(
                        <Transaktion trans={trans}i={i}/>
                    )
                })}
            </div>
        )
}