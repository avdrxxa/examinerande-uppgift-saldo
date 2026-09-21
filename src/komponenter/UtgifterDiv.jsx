import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function UtgifterDiv(){
    let{totalUtgifterConvert,valuta}=useContext(BankAppContext)
    return(
        <div className="utgifterDiv">
            <h3>Utgifter</h3>
            <div className="flex-end">
                <h3>- {totalUtgifterConvert.toLocaleString('sv-SE')} {valuta}</h3>
            </div>
        </div>
        )
}