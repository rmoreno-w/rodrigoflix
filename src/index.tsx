import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Error404Page from './pages/Error404Page';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cadastro/Categoria' component={CadastroCategoria} />
            <Route path='/cadastro/Video' component={CadastroVideo} />
            <Route component={Error404Page} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
