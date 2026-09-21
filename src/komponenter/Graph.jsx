import { useContext, useMemo } from "react"
import { BankAppContext } from "../context/BankAppContext"
import { BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts"

let färger={
    mat:'#b4df58',
    transport: '#ea4dc8',
    boende: '#91daee',
    nöje: '#4be48a',
    övrigt: '#b767f8'
}
let månader=['Jan', 'Feb', 'Mars', 'Apr', 'Maj', 'Juni', 'Juli', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

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
    console.log(utgifter)
    return(
        <div className="graph">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey='månad'/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey='mat' fill={färger.mat} radius={[6, 6, 0, 0]}/>
                    <Bar dataKey='transport' fill={färger.transport} radius={[6, 6, 0, 0]}/>
                    <Bar dataKey='boende' fill={färger.boende} radius={[6, 6, 0, 0]}/>
                    <Bar dataKey='nöje' fill={färger.nöje} radius={[6, 6, 0, 0]}/>
                    <Bar dataKey='övrigt' fill={färger.övrigt} radius={[6, 6, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}