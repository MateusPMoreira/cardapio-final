import React, { Component } from 'react';
import api from '../../Services/api';
export default class Relatorios extends Component{
  state={
    cardapio: []
  }
  componentDidMount(){
    this.loadCardapio();
  }
  loadCardapio = async ()=>{
    const resposta = await api.get('/listbebida');
  }
}