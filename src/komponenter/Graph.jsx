import { useContext, useMemo } from "react"
import { BankAppContext } from "../context/BankAppContext"
import { BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts"

let färger={
    mat:'#f97768',
    transport: '#4dabea',
    boende: '#eead44',
    nöje: '#58f499',
    övrigt: '#e067f8'
}
let månader=['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'Septemeber', 'Oktober', 'November', 'December']

function grupperaMånads(utgifter){
    let grupper={}
    utgifter.forEach((utgift)=>{
        let månadsIndex=new Date(utgift.date).getMonth()
        let månad=månader[månadsIndex]
        if(!grupper[månad]){
            grupper[månad]={månad, mat:0, transport:0, boende:0, nöje:0, övrigt:0}
        }
        grupper[månad][utgift.kategori]+=utgift.belopp
    })
    return månader.filter(e=>grupper[e]).map(e=>grupper[e])
}
export default function Graph(){
    let {utgifter}=useContext(BankAppContext)
    let data=useMemo(()=>grupperaMånads(utgifter),[utgifter])
    return(
        <div className="graph">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey='månad'/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey='mat' fill={färger.mat}/>
                    <Bar dataKey='transport' fill={färger.transport}/>
                    <Bar dataKey='boende' fill={färger.boende}/>
                    <Bar dataKey='nöje' fill={färger.nöje}/>
                    <Bar dataKey='övrigt' fill={färger.övrigt}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}