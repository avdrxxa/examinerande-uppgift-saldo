import logo from '../assets/logo.svg'
import logoText from '../assets/logo text.svg' 
import Betala from './Betala'
import Inkomst from './Inkomst'
import BytValuta from './BytValuta'
import { Link } from 'react-router-dom'

export default function Header({isHome}){
    return(
        <nav>
        <div className='row'>
            <img src={logo}></img>
            <img src={logoText}></img>
        </div>
            {isHome && <div className='actions'> <Betala/> <Inkomst/> <BytValuta/> </div>}
            {!isHome && <p className='linkBack'><Link to={'/'}>{`< Back Home `}</Link></p>}
        </nav>
        )
}
