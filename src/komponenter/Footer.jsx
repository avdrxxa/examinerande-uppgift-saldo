import logo from '../assets/logo.svg'
import logoText from '../assets/logo text.svg' 
export default function Footer(){
    return(
        <footer>
            <img src={logo}></img>
            <img className='textLogo' src={logoText}></img>
            <p>@All rights reserved. Project done by Andreea-Raluca Damian.</p>
        </footer>
        )
}