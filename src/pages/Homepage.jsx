import Header from "../komponenter/Header";
import InkomsterDiv from "../komponenter/inkomstDiv";
import Saldo from "../komponenter/Saldo";
import TransaktionerDiv from "../komponenter/TransaktionerDiv";
import UtgifterDiv from "../komponenter/UtgifterDiv";
import UtgifterPerKategori from "../komponenter/UtgifterPerKategori";

export default function Homepage(){

    return(
        <>
            <Header isHome={true}/>
            <main>
                <h1>Good afternoon!</h1>
                <Saldo/>
                <div className="inkomstutgifter">
                    <InkomsterDiv/>
                    <UtgifterDiv/>
                </div>
                <div className="kategoritrans">
                    <UtgifterPerKategori/>
                    <TransaktionerDiv/>
                </div>
            </main>
        </>
    )
}