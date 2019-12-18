import React, { Component } from 'react';
 
import { CssCardapioComida } from './styles';
import { Link } from 'react-router-dom';

import api from "../../Services/api";

export default class Cardapio extends Component {
  state = {
    comidas: [],
  }

  componentDidMount() {
    this.loadCardapioComida();
  }

  loadCardapioComida = async () => {
    const response = await api.get('/listacomida')
    console.log(response.data);
    this.setState({ comidas: response.data })
  };


  render() {
    return (
      <CssCardapioComida>
        <h1>Cardapio de Comidas</h1>

        <p className="subtitulo">Você tem {this.state.comidas.length} opçẽs de pratos disponíveis atualmente</p>
        {/* <div className="caixote"> */}
        <div className="comida-lista">
          {this.state.comidas.map(Comida => (
            <article key={Comida._id}>
              <p className="lista">  Prato: {Comida.nome}</p>
              <p className="lista">  Preço: {Comida.valor}</p>
              <p className="lista-ultimo">  Detalhes: {Comida.descricao}</p>
            </article>
          ))}
        </div> 
        <Link to="/cardapiobebida">
          <h3 className="cadastro">Escolha uma bebida</h3>
        </Link>
      </CssCardapioComida>
    );
  }
}