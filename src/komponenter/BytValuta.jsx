import { useContext, useState } from "react"
import { BankAppContext } from "../context/BankAppContext"

export default function BytValuta(){
    let [popup, setPopup]= useState(false)
    let [vald, setVald]=useState('SEK')
    let [fel, setFel] = useState('')
    let {bytValuta, valuta,rates}=useContext(BankAppContext)
    function submit(e){
        e.preventDefault()
        setFel('')
        if(!vald){
            setFel('Ange en giltigt valuta')
            return
        }
        if(vald===valuta){
            setFel('Du kan inte ändra till samma valuta')
            return
        }
        if(!valuta){
            alert('Inga valutor kunde hittas, denna tjänst är tillgänlig nere.')
        }
        bytValuta(vald)
        alert(`Du har bytt valuta till ${vald}!`)
        setPopup(false)
    }
    return(
        <div>
            <button onClick={()=>setPopup(true)} className="valutaBtn">🪙</button>
            <p>Byt valuta</p>
            {popup&&(
                <div className="stängPopup" onClick={()=>setPopup(false)}>
                    <div className="popup" onClick={(e)=>e.stopPropagation()}>
                        <button className="x" onClick={()=>setPopup(false)}>x</button>
                        <h3>Byt valuta här</h3>
                        <form onSubmit={submit}>
                            <label>Välj valuta:</label>
                            <select value={vald} onChange={(e)=>setVald(e.target.value)}>
                                <option value='SEK'>SEK</option>
                                {Object.keys(rates).map(rate=>(
                                    <option key={rate} value={rate}>{rate}</option>
                                ))}
                            </select>
                            {fel&& <p className="fel">{fel}</p>}
                            <button className="submitBetala">Byt valuta</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        )
}