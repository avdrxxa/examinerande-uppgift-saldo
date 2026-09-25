import { useContext, useState } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function Inkomst(){
        let [popup, setPopup]= useState(false)
        let [belopp, setBelopp] = useState('')
        let [datum, setDatum] = useState('')
        let [fel, setFel] = useState('')
        let {lön, konto, konverteraSEK}=useContext(BankAppContext)
        function submit(e){
            e.preventDefault()
            setFel('')
            if(!belopp||Number(belopp)<=0){
                setFel('Ange ett giltigt belopp')
                return
            }
            let nyInkomst={
                kategori:'lön',
                belopp:konverteraSEK(belopp),
                date:datum,
                name:'Lön',
                konto
            }
            lön(nyInkomst)
            alert(`Du har fått ${belopp} i lön!`)
            setPopup(false)
        }
    return(
        <div>
            <button onClick={()=>setPopup(true)} className="inkomstBtn">💳</button>
            <p>Registrera inkomst</p>
            {popup&&(
                <div className="stängPopup" onClick={()=>setPopup(false)}>
                    <div className="popup" onClick={(e)=>e.stopPropagation()}>
                        <button className="x" onClick={()=>setPopup(false)}>x</button>
                        <h3>Registrera din lön här</h3>
                        <form onSubmit={submit}>
                            <label>Välj konto:</label>
                            <select value={konto} disabled>
                                <option value={konto}>{konto}</option>
                            </select>
                            <label>Belopp:</label>
                            <input type="number" min='0' value={belopp} onChange={(e)=>setBelopp(e.target.value)} required></input>
                            <label>Date:</label>
                            <input type="date" value={datum} onChange={(e)=>setDatum(e.target.value)} required></input>
                            {fel&& <p className="fel">{fel}</p>}
                            <button className="submitBetala">Registrera</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        )
}