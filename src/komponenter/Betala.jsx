import { useContext, useState } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function Betala(){
    let [popup, setPopup]= useState(false)
    let [belopp, setBelopp] = useState('')
    let [kategori, setKategori] = useState('boende')
    let [namn, setNamn] = useState('')
    let [datum, setDatum] = useState('')
    let [fel, setFel] = useState('')
    let {betala, konto, totalSaldo, kategorier,konverteraSEK, totalSaldoConvert}=useContext(BankAppContext)
    function submit(e){
        e.preventDefault()
        setFel('')
        if(!belopp||Number(belopp)<=0){
            setFel('Ange ett giltigt belopp')
            return
        }
        if(Number(belopp)>totalSaldo){
            setFel('Du har inte dem pengarna')
            return
        }
        if(!namn){
            setFel('Ange namn')
            return
        }
        if(!datum){
            setFel('Ange datum')
            return
        }
        let nyUppgift={
            kategori,
            belopp:konverteraSEK(belopp),
            date:datum,
            name:namn,
            konto
        }
        betala(nyUppgift)
        alert(`Du har betalat ${belopp} till ${namn}!`)
        setPopup(false)
    }
    return(
        <div>
            <button onClick={()=>setPopup(true)} className="betalaBtn">🧾</button>
            <p>Betala räkningar</p>
            {popup&&(
                <div className="stängPopup" onClick={()=>setPopup(false)}>
                    <div className="popup" onClick={(e)=>e.stopPropagation()}>
                        <button className="x" onClick={()=>setPopup(false)}>x</button>
                        <h3>Betala din räkning här</h3>
                        <form onSubmit={submit}>
                            <label>Välj konto:</label>
                            <select value={konto} disabled>
                                <option value={konto}>{konto}</option>
                            </select>
                            <label>Belopp:</label>
                            <input type="number" min='0' max={totalSaldo||0} value={belopp} placeholder={`Max ${totalSaldoConvert}`} onChange={(e)=>setBelopp(e.target.value)} required></input>
                            <label>Kategori:</label>
                            <select value={kategori} onChange={(e)=>setKategori(e.target.value)}>
                                {kategorier.map(kategori=>(
                                    <option key={kategori} value={kategori}>{kategori}</option>
                                ))}
                            </select>
                            <label>Namn:</label>
                            <input type="text" value={namn} onChange={(e)=>setNamn(e.target.value)} required></input>
                            <label>Date:</label>
                            <input type="date" value={datum} onChange={(e)=>setDatum(e.target.value)} required></input>
                            {fel&& <p className="fel">{fel}</p>}
                            <button className="submitBetala">Betala</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        )
}