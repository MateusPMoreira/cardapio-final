
import React, { useState } from 'react';
import { CssCad } from './styles';
import { Link } from 'react-router-dom';
import api from '../../Services/api';


export default function Login({ history }) {
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const result = await api.post("/cadusuario", {
        name,
        email,
        password
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
                onChange={event => setName(event.target.value)}
              ></input>
              <input placeholder=" Email:" type="email"
                //pegando o valor do email
                id="email"
                onChange={event => setEmail(event.target.value)}
              ></input>
              <input placeholder=" Senha:" type="password"
                //pegando o valor da senha
                id="password"
                onChange={event => setPassword(event.target.value)}
              ></input>
              <button className="botao" type="submit">Confirma</button>
            </div>
          </form>
          <Link to="/">
            <h3 className="voltar">Logar</h3>
          </Link>
        </div>
      </body>
    </CssCad>
  );
}