import React from 'react';
//import Logo from '../../assets/imagem/Logo.png';
import RafaFlix from '../../assets/imagem/RafaFlix.png';
import './menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink';
import { Link } from 'react-router-dom';


function Menu(){
    
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="RafaFlix" src={RafaFlix} alt="RafaFlix"/>
            </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
        </Button>
    </nav>

    ); 
}

export default Menu;