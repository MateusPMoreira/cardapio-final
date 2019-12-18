import React, { useState, useEffect } from 'react';
import { CssLogin } from './styles';

import { Link } from 'react-router-dom';

export default function Menu({ history }) {

  return (
    //Estrutura (html e css (styled-components))
    <CssLogin>
      <body>
        {/* <div className="quadradao"> */}
        <div className="cadastrar">
          
          <div className="comida">
            <Link to="/cadcomida">
              <h3 className="cadastro">Cadastrar Pratos</h3>
            </Link>
          </div>

          <div className="bebida">
            <Link to="/cadbebida">
              <h3 className="cadastro">Cadastrar Bebidas</h3>
            </Link>
          </div>

          <div className="sobremesa">
            <Link to="/cadsobremesa">
              <h3 className="cadastro">Cadastrar Sobremesas</h3>
            </Link>
          </div>

        </div>
        {/* ------------------------------------------ */}
        <div className="cardapios">
          <div className="cadComida">
            <Link to="/cardapio">
              <h3 className="cadastro">Cardapio de Pratos</h3>
            </Link>
          </div>

          <div className="cadBebida">
            <Link to="/cardapiobebida">
              <h3 className="cadastro">Cardapio de Bebidas</h3>
            </Link>
          </div>
          <div className="cadSobremesa">
            <Link to="/cardapiosobremesa">
              <h3 className="cadastro">Cardapio de Sobremesas</h3>
            </Link>
          </div>

        </div>
        {/* </div> */}
      </body>

    </CssLogin>

  );
}