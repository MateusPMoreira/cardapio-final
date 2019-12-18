import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './Pages/Login/index';
import Cadastro from './Pages/CadastroUsuario /index';
import Main from './Pages/Main';
import Cardapio from './Pages/CardapioComida /index';
import CardapioBebida from './Pages/CardapioBebida/index';
import CardapioSobremesa from './Pages/CardapioSobremesa/index';
import CadComida from './Pages/CadastroComida/index';
import CadBebida from './Pages/CadastroBebida/index';
import CadSobremesa from './Pages/Cadastrosobremesa/index';

import Menu from './Pages/Menu/index';


export default function Mapa() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/sessions" component={Cadastro} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/cardapio" component={Cardapio} />
            <Route exact path="/cardapiobebida" component={CardapioBebida} />
            <Route exact path="/cardapiosobremesa" component={CardapioSobremesa} />
            <Route exact path="/cadcomida" component={CadComida} />
            <Route exact path="/cadbebida" component={CadBebida} />
            <Route exact path="/cadsobremesa" component={CadSobremesa} />


            <Route exact path="/menu" component={Menu} />

        </BrowserRouter>
    );
}