import { createContext, useEffect, useState } from "react";
import boendelogo from '../assets/boendelogo.svg'
import matlogo from '../assets/matlogo.svg'
import transportlogo from '../assets/transportlogo.svg'
import lönlogo from '../assets/lönlogo.svg'
import övrigtlogo from '../assets/övrigtlogo.svg'
import nöjelogo from '../assets/nöjelogo.svg'
export const BankAppContext=createContext(null)
export function BankAppProvider({children}){
    //skriv values här så som functioner, arrays, objecter och 
    //new Date().toJSON().splice(0,10)
    let [rates,setRates]=useState({})
    let kategorier=['boende', 'mat', 'transport', 'nöje', 'övrigt']
    let kategoriLogos={
        boende:boendelogo,
        mat:matlogo,
        transport:transportlogo,
        nöje:nöjelogo,
        övrigt:övrigtlogo,
        lön:lönlogo
    }
    let [inkomst,setInkomst]=useState([
        {
            kategori:'lön',
            belopp:33500,
            date:'2026-07-25',
            name:'Lön',
            konto:'777102-8091'
        },
    ])
    useEffect(()=>{
        let getValutor=async()=>{
            try{
                let res=await fetch('https://api.frankfurter.dev/v1/latest?from=SEK')
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
    let [valuta,setValuta]=useState('SEK')
    function betala(utgift){
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
            return SEK
        }
        let rate=rates[valuta]
        if(!rate){
            return SEK
        }
        return SEK*rate
    }
    let totalUtgifter=utgifter.reduce((total,utgift)=>utgift.belopp+total,0)
    let totalUtgifterConvert= konvertera(totalUtgifter)
    function gruppEfterKategori(utgifter){
        let grupper={}
        utgifter.forEach(utgift=>{
            if(!grupper[utgift.kategori]){
                grupper[utgift.kategori]=0
            }
            grupper[utgift.kategori]+=utgift.belopp
        })
        return grupper
    }
    let kategoriTotal= gruppEfterKategori(utgifter)
    let sumUtgift=Object.values(kategoriTotal).reduce((sum,val)=>sum+val,0)
    let kategoriProcent=Object.entries(kategoriTotal).map(([kategori, belopp])=>({
        kategori,
        belopp,
        procent:(belopp/sumUtgift)*100
    }))
    let transaktioner=[
        ...utgifter.map(u=>({...u,typ:'utgift'})),
        ...inkomst.map(i=>({...i, typ:'inkomst'}))
    ]
    let totalInkomster=inkomst.reduce((sum,i)=>sum+i.belopp,0)
    let totalSaldo=totalInkomster-totalUtgifter
    return(
        <BankAppContext.Provider value={{inkomst,setInkomst,utgifter, setUtgifter, valuta, setValuta, konto, betala,lön,bytValuta,kategorier, konvertera, totalUtgifterConvert, kategoriLogos, sumUtgift, kategoriProcent, transaktioner,totalSaldo, totalInkomster}}>
            {children}
        </BankAppContext.Provider>
    )
}