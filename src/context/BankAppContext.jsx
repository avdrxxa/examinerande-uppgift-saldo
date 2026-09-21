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
    let [inkomst,setInkomst]=useState(()=>{
        let sparat= localStorage.getItem('inkomst')
        return sparat? JSON.parse(sparat):[
        {
            kategori:'lön',
            belopp:33500,
            date:'2026-07-25',
            name:'Lön',
            konto:'777102-8091'
        },
        {
            kategori:'lön',
            belopp:33500,
            date:'2026-05-25',
            name:'Lön',
            konto:'777102-8091'
        },
        {
            kategori:'lön',
            belopp:33500,
            date:'2026-04-25',
            name:'Lön',
            konto:'777102-8091'
        },
        {
            kategori:'lön',
            belopp:33500,
            date:'2026-03-25',
            name:'Lön',
            konto:'777102-8091'
        },
        {
            kategori:'lön',
            belopp:133500,
            date:'2026-02-25',
            name:'Lön',
            konto:'777102-8091'
        },
    ]})
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
    let[utgifter,setUtgifter]=useState(()=>{
        let sparat=localStorage.getItem('utgifter')
        return sparat? JSON.parse(sparat):[
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
            kategori:'mat',
            belopp:820,
            date:'2026-02-10',
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
            belopp:1989,
            date:'2026-03-20',
            name:'Weekday',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:12100,
            date:'2026-05-26',
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
            belopp:279,
            date:'2026-11-28',
            name:'SL',
            konto:'777102-8091'
        },
        {
        kategori:'mat',
        belopp:645,
        date:'2026-01-08',
        name:'Ica Kvantum',
        konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:890,
            date:'2026-01-12',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:11800,
            date:'2026-01-27',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:350,
            date:'2026-01-18',
            name:'SF Bio',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:499,
            date:'2026-01-22',
            name:'Apotea',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:820,
            date:'2026-02-10',
            name:'Ica MAXI',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:420,
            date:'2026-02-15',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:11800,
            date:'2026-02-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:879,
            date:'2026-02-26',
            name:'Biljard',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:349,
            date:'2026-02-14',
            name:'Clas Ohlson',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:1120,
            date:'2026-03-05',
            name:'Willys',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:790,
            date:'2026-03-09',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:11800,
            date:'2026-03-27',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:245,
            date:'2026-03-15',
            name:'Darts',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:1989,
            date:'2026-03-20',
            name:'Weekday',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:6100,
            date:'2026-04-04',
            name:'Ica Kvantum',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:4390,
            date:'2026-04-11',
            name:'SL Årskort',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:9800,
            date:'2026-04-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:1580,
            date:'2026-04-19',
            name:'Circus Cirkus',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:8020,
            date:'2026-04-23',
            name:'Elgiganten',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:4200,
            date:'2026-05-06',
            name:'Willys',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:3200,
            date:'2026-05-14',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:1220,
            date:'2026-05-20',
            name:'Gröna Lund',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:5150,
            date:'2026-05-16',
            name:'H&M',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:3980,
            date:'2026-06-03',
            name:'Ica MAXI',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:2870,
            date:'2026-06-10',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:12100,
            date:'2026-06-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:1990,
            date:'2026-06-21',
            name:'Midsommarfest',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:2340,
            date:'2026-06-17',
            name:'Kicks',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:2560,
            date:'2026-07-07',
            name:'Willys',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:1200,
            date:'2026-07-13',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:12100,
            date:'2026-07-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:3400,
            date:'2026-07-18',
            name:'Skansen',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:990,
            date:'2026-07-22',
            name:'Pressbyrån',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:5670,
            date:'2026-08-05',
            name:'Ica Kvantum',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:6210,
            date:'2026-08-12',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:1320,
            date:'2026-08-27',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:530,
            date:'2026-08-16',
            name:'Fotbollsbiljetter',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:3760,
            date:'2026-08-20',
            name:'Kjell & Company',
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
            kategori:'transport',
            belopp:610,
            date:'2026-09-08',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:3620,
            date:'2026-09-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:390,
            date:'2026-09-15',
            name:'Zwift Prenumeration',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:989,
            date:'2026-09-11',
            name:'Gina Tricot',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:970,
            date:'2026-10-06',
            name:'Ica MAXI',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:1030,
            date:'2026-10-14',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:1180,
            date:'2026-10-27',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:640,
            date:'2026-10-19',
            name:'Halloween Party',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:1590,
            date:'2026-10-23',
            name:'Åhléns',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:1140,
            date:'2026-11-05',
            name:'Willys',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:279,
            date:'2026-11-28',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:1210,
            date:'2026-11-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:720,
            date:'2026-11-15',
            name:'Bowling',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:1150,
            date:'2026-11-09',
            name:'Lindex',
            konto:'777102-8091'
        },
        {
            kategori:'mat',
            belopp:1450,
            date:'2026-12-04',
            name:'Ica Kvantum',
            konto:'777102-8091'
        },
        {
            kategori:'transport',
            belopp:679,
            date:'2026-12-28',
            name:'SL',
            konto:'777102-8091'
        },
        {
            kategori:'boende',
            belopp:12100,
            date:'2026-12-26',
            name:'ByggVesta AB',
            konto:'777102-8091'
        },
        {
            kategori:'nöje',
            belopp:2340,
            date:'2026-12-20',
            name:'Julmarknad Skansen',
            konto:'777102-8091'
        },
        {
            kategori:'övrigt',
            belopp:4980,
            date:'2026-12-15',
            name:'Weekday Julklappar',
            konto:'777102-8091'
        },
    ]})
    let [valuta,setValuta]=useState(()=>{
        let sparat=localStorage.getItem('valuta')
        return sparat?JSON.parse(sparat):'SEK'
    })
    function betala(utgift){
        setUtgifter(prev=>[...prev,utgift])
    }
    function lön(inkomst){
        setInkomst(prev=>[...prev,inkomst])
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
        return Math.round(SEK*rate*100)/100
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
    let totalInkomsterConvert= konvertera(totalInkomster)
    let totalSaldo=totalInkomster-totalUtgifter
    let totalSaldoConvert=konvertera(totalSaldo)
    useEffect(() => {localStorage.setItem('inkomst', JSON.stringify(inkomst))}, [inkomst])
    useEffect(() => {localStorage.setItem('utgifter', JSON.stringify(utgifter))}, [utgifter])
    useEffect(() => {localStorage.setItem('valuta', JSON.stringify(valuta))}, [valuta])
    return(
        <BankAppContext.Provider value={{inkomst, totalInkomsterConvert,totalSaldoConvert,setInkomst,utgifter, setUtgifter, valuta, setValuta, konto, betala,lön,bytValuta,kategorier, konvertera, totalUtgifterConvert, kategoriLogos, sumUtgift, kategoriProcent,rates, transaktioner,totalSaldo, totalInkomster}}>
            {children}
        </BankAppContext.Provider>
    )
}