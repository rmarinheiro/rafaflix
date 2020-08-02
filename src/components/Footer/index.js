import React from 'react';
import { FooterBase } from './styles';
import RafaFlix from '../../assets/imagem/RafaFlix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="">
        <img className="RafaFlix" src={RafaFlix} alt="RafaFlix"/>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.alura.com.br/">
          Rafael Marinheiro
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
