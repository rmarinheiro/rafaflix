import React from 'react';
//import Logo from '../../assets/imagem/Logo.png';
import RafaFlix from '../../assets/imagem/RafaFlix.png';
import './menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink';


function Menu(){
    
    return(
        <nav className="Menu">
            <a href="/">
                <img className="RafaFlix" src={RafaFlix} alt="RafaFlix"/>
            </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
        </Button>
    </nav>

    ); 
}

export default Menu;