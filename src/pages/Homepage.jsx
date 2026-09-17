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
            <h1>Good afternoon!</h1>
            <Saldo/>
            <div className="inkomst&utgifter">
                <InkomsterDiv/>
                <UtgifterDiv/>
            </div>
            <div className="kategori&trans">
                <UtgifterPerKategori/>
                <TransaktionerDiv/>
            </div>
        </>
    )
}