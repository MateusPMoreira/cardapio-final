import React, { useState, useEffect } from 'react';
import { CssLogin } from './styles';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { login } from '../../Services/auth';

export default function Login({ history }) {

  const [loading, setLoading] = useState('disabled');
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    const isEnabled = () => {
      return user.email.length > 5 && user.password.length >= 5
        ? setLoading('')
        : setLoading('disabled');
    };
    isEnabled();
  }, [user]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/cadsession`, user);

      const { token, user: userData } = response.data;

      if (token) {
        login(token, userData);
      }
      //pra onde vai
      history.push('/menu');
    } catch (err) {
      toast.error('Email ou senha inválido!');
    }
  }

  return (
    //Estrutura (html e css (styled-components))
    <CssLogin>
      <body>
        <div className="divPrincipal">
          <form onSubmit={handleSubmit}>
            <div className="titulo">
              <p className>login</p>
            </div>
            <div className="divForm">
              <input placeholder=" Email:"
                id="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
                required></input>
              <input placeholder=" Senha:"
                id="password"
                type="password"
                value={user.password}
                onChange={handleInputChange}
                required
              ></input>
              <button className="botao" loading={loading}>Entrar</button>

            </div>
          </form>
          <Link to="/sessions">
            <h3 className="cadastro">Cadastrar</h3>
          </Link>
        </div>
    

      </body>

    </CssLogin>

  );
}