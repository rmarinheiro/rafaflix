import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/Categoria';

 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/cadastro/video" component={CadastrarVideo} exact/>
      <Route path = "/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route path = "/" component={Home} exact />
      <Route component={()=>(<div>404</div>)} />
    </Switch>
  </BrowserRouter>,


  document.getElementById('root')
);


