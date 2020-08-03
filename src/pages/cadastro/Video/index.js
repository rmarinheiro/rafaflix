import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';



function CadastrarVideo(){
return(
    <PageDefault>

      <h1> Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
    </PageDefault>
  )
};

export default CadastrarVideo;