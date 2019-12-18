//Importção para o estilo da página de cadastro
import styled from "styled-components";

export const CssCad = styled.div`
    a{
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration:none;
          cursor: pointer;
          background: #fff;
    }
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: #f0f0f0;
    }
    .divPrincipal{    
        height: 430px;
        width: 350px;
        border: 3px solid #0015ff;
        border-radius: 4px;
        background: #fff;   
    }
    .titulo{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0015ff;
        font-size: 60px;
        height: 100px;
        margin-top: 20px;
    }
    .divForm{    
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 18px;
        width: inherit;
        height: 250px;
    }
    input{
        border: 2px solid #0015ff;
        border-radius: 4px;
        font-family: UBUNTU;
        background-color:#d4daff;
        height: 46px;
        width: 280px;
        font-size: 19px;
        color: #0015ff;
        margin-bottom: 6px;
    }
    .botao{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 49px;
        width: 120px;
        background-color: #0015ff;
        border: 2px solid #e5d8ed;
        border-radius: 4px;
        color: #fff;
        font-family: Ubuntu;
        font-size: 32px;
        margin-bottom: 4px;
    }
    .voltar{
        display: flex;
        justify-content: center;
        align-items: center;        
        font-size: 18px;
        width: 120px;
        color: #0015ff;
    }
 
    .botao{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 49px;
        width: 120px;
        background-color: #0015ff;
        border: 2px solid #a2aadb;
        border-radius: 4px;
        color: #fff;
        font-family: Ubuntu;
        font-size: 25px;
    }


`;