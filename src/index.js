import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Erro 404 = Caminho nao definido</div>);


ReactDOM.render(
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria}/>
      <Route path="/cadastro/Video" component={CadastroVideo}/>
      <Route component= {Pagina404}/>
    </Switch>
    </BrowserRouter>
  , document.getElementById('root')
);