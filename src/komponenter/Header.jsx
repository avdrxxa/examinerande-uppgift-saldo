import logo from '../assets/logo.svg'
import logoText from '../assets/logo text.svg' 
import Betala from './Betala'
import Inkomst from './Inkomst'
import BytValuta from './BytValuta'

export default function Header({isHome}){

    console.log(isHome);
    return(
        <nav>
            <img src={logo}></img>
            <img src={logoText}></img>
            {isHome && <div className='actions'> <Betala/> <Inkomst/> <BytValuta/> </div>}
        </nav>
        )
}
