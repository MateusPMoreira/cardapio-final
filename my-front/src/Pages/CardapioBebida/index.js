import React, { Component } from 'react';
import { CssCardapioBebida } from './styles';
import { Link } from 'react-router-dom';

import api from "../../Services/api";

export default class CardapioBebida extends Component {
  state = {
    bebidas: [],
  }

  componentDidMount() {
    this.loadCardapioBebida();
  }

  loadCardapioBebida = async () => {
    const response = await api.get('/listabebida')
    console.log(response.data);
    this.setState({ bebidas: response.data })
  };


  render() {
    return (
      <CssCardapioBebida>
        <h1>Cardapio de Bebidas</h1>

        <p className="subtitulo">Você tem {this.state.bebidas.length} opçẽs de pratos disponíveis atualmente</p>

        <div className="comida-lista">
          {this.state.bebidas.map(Bebida => (
            <article key={Bebida._id}>
              <p className="lista">  Prato: {Bebida.nome}</p>
              <p className="lista">  Preço: {Bebida.valor}</p>
              <p className="lista-ultimo">  Detalhes: {Bebida.descricao}</p>
            </article>
          ))}
        </div>
        <Link to="/cardapiosobremesa">
          <h3 className="cadastro">Escolha uma sobremesa</h3>
        </Link>
      </CssCardapioBebida>
    );
  }
}