
import React, { useState } from 'react';
import { CssCad } from './styles';
import { Link } from 'react-router-dom';
import api from '../../Services/api';


export default function CadSobremesa({ history }) {

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")


  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const result = await api.post("/cadsobremesa", {
        nome,
        descricao,
        valor
      })

      console.log(result);

      history.push("/")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <CssCad>
      <body>
        <div className="divPrincipal">
          <form onSubmit={handleSubmit}>
            <p className="titulo">Cadastro</p>
            <div className="divForm">
              <input placeholder=" Nome:" type="text"
                //pegando o valor do nome
                id="nome"
                onChange={event => setNome(event.target.value)}
              ></input>
              <input placeholder=" Descricao:" type="text"
                //pegando o valor do email
                id="descricao"
                onChange={event => setDescricao(event.target.value)}
              ></input>
              <input placeholder=" Valor:" type="number"
                //pegando o valor da senha
                id="valor"
                onChange={event => setValor(event.target.value)}
              ></input>
              <button className="botao" type="submit">Confirma</button>
            </div>
          </form>
          <Link to="/menu">
            <h3 className="voltar">Menu</h3>
          </Link>
        </div>
      </body>
    </CssCad>
  );
}