import { useContext } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function Saldo(){
    let[inkomst,konto,valuta]=useContext(BankAppContext)
    return(
        <div className="saldoDiv">
            <div className="saldoText">
                <h2>Din Saldo</h2>
                {<h3>Tillgänlig just nu på ditt konto: ${inkomst}</h3>}
            </div>
            <div className="kontoText">
                <div className="flex-row">
                    <p>mitt-personliga-kontot</p>
                    <p>{konto}</p>
                </div>
                    <h2>{inkomst} {valuta}</h2>
            </div>
        </div>
        )
}