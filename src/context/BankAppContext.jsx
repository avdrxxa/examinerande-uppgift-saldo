import { createContext, useEffect, useState } from "react";

let BankAppContext= createContext(null)
export function BankAppProvider({children}){
    //skriv values här så som functioner, arrays, objecter och 
    //new Date().toJSON().splice(0,10)
    let [inkomst,setInkomst]=useState(17231)
    let [valuta,setValuta]=useState('SEK')
    let [rates,setRates]=useState({})
    useEffect(()=>{
        let getValutor=async()=>{
            try{
                    let res=await fetch('https://api.frankfurter.app/latest?from=SEK')
                    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
                    let data= await res.json()
                    setRates(data.rates)
            }catch(err){
                console.error(err)
            }
    }
    getValutor()
},[])
    let konto= '777102-8091'
    let[utgifter,setUtgifter]=useState([
        {
            kategori:'mat',
            belopp:320,
            date:'2026-01-10',
            name:'Ica MAXI',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:1390,
            date:'2026-09-21',
            name:'Willys',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:989,
            date:'2026-07-20',
            name:'Gina Tricot',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:12100,
            date:'2026-11-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:879,
            date:'2026-02-26',
            name:'Bilijard',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:200,
            date:'2026-02-26',
            name:'Darts',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:29,
            date:'2026-03-28',
            name:'Pressbyrån',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:679,
            date:'2026-12-28',
            name:'SL',
            konto:'777102-8091'
        },
    ])
    function betala(belopp, utgift){
        setInkomst(prev=>prev-belopp)
        setUtgifter(prev=>[...prev,utgift])
    }
    function lön(belopp){
        setInkomst(prev=>prev+belopp)
    }
    function bytValuta(nyValuta){
        setValuta(nyValuta)
    }
    function konvertera(SEK){
        if(valuta==='SEK'){
            SEK
        }
        let rate=rates[valuta]
        if(!rate){
            SEK
        }
        return SEK*rate
    }
    return(
        <BankAppContext.Provider value={{inkomst,setInkomst,utgifter, setUtgifter, valuta, setValuta, konto, betala,lön,bytValuta, konvertera}}>
            {children}
        </BankAppContext.Provider>
    )
}