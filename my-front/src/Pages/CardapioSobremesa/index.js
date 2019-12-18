import React, { Component } from 'react';
 
import { CssCardapioSobremesa } from './styles';
import { Link } from 'react-router-dom';

import api from "../../Services/api";

export default class CardapioSobremesa extends Component {
  state = {
    sobremesas: [],
  }

  componentDidMount() {
    this.loadCardapioBebida();
  }

  loadCardapioBebida = async () => {
    const response = await api.get('/listasobremesa')
    console.log(response.data);
    this.setState({ sobremesas: response.data })
  };


  render() {
    return (
      <CssCardapioSobremesa>
        <h1>Cardapio de Sobremesas</h1>

        <p className="subtitulo">Você tem {this.state.sobremesas.length} opçẽs de pratos disponíveis atualmente</p>

        <div className="comida-lista">
          {this.state.sobremesas.map(Sobremesa => (
            <article key={Sobremesa._id}>
              <p className="lista">  Prato: {Sobremesa.nome}</p>
              <p className="lista">  Preço: {Sobremesa.valor}</p>
              <p className="lista-ultimo">  Detalhes: {Sobremesa.descricao}</p>
            </article>
          ))}
        </div>

        <Link to="/menu">
          <h3 className="cadastro">Finalizar escolhas e voltar ao menu</h3>
        </Link>
      </CssCardapioSobremesa>
    );
  }
}