import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function InkomsterDiv(){
    let{totalInkomsterConvert,valuta}=useContext(BankAppContext)
    return(
        <div className="inkomstDiv">
            <h3>Inkomster</h3>
            <div className="flex-end">
                <h3>+ {Number(totalInkomsterConvert).toLocaleString('sv-SE',{maximumFractionDigits: 2})} {valuta}</h3>
            </div>
        </div>
        )
}