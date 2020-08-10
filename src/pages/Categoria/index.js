import React, { useState , useEffect} from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';



function CadastroCategoria(){
  const [categorias,setCategorias]= useState([]);

  const valoresIniciais={
    nome:'',
    descricao: '',
    cor:'',
  }
  const [values , setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
        ...values,
        [chave]: valor, //nome: 'valor'
    })



  }

  function handlerOnChange(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    );
    //setNomeDaCategoria(infosEvento.target.value);
 }

 useEffect( ()=>{
   console.log("Aconteceu algo");
    const URL_TOP = 'http://localhost:8080/categorias';
   fetch(URL_TOP).then(async(respostaServidor)=>{
      const resposta = await respostaServidor.json();
      setCategorias([
        ...resposta,
      ]);
   });
   
  } , []);

return(
    <PageDefault>
        
      <h1> Cadastro de Categoria:{values.nome}</h1>

      <form onSubmit={function handleSubmit(infosEvento){
        infosEvento.preventDefault();
        setCategorias([
            ...categorias,
            values.nome,
        ]);

        setValues(valoresIniciais);
      }}>
      
      <FormField
        label="Nome da Categoria"
         type="text"
         name="nome"
        value={values.nome}
        onChange={handlerOnChange} 
       />


         <FormField
          label="Descricao"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerOnChange} 
       />


       {/* <div>
        <label>
          Descrição:
           <textarea type="text" value={values.descricao} name="descricao" onChange={handlerOnChange}/>
        </label>
       </div> */}

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerOnChange} 
       />

      { /* <div>
          <label>
            Cor:
           <input type="color" value={values.cor} name="cor" onChange={handlerOnChange}/>
        </label>
      </div> */} 

          <button>
            Cadastrar
          </button>
      </form>

       { categorias.length === 0  &&(

        <div>

          Loading...
        </div>
       )}

      <ul>
        {categorias.map((categoria,indice) =>{

          return(
            <li key={`${categoria}${indice}`}>
              { categoria.nome }
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
};

export default CadastroCategoria;