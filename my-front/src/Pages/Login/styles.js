 
import styled from "styled-components";
 

export const CssLogin = styled.div`
    *{ 
        font-family: UBUNTU;
    }
  
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration:none;
        cursor: pointer;
        background: #fff;
    }

    .titulologin{

        color: #528ec7;
        background: #fff;
        /* font-size: px; */
    }

    h3{
        color: #528ec7;
        background: #fff;
    }
  
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #f0f0f0;

    }

    

    .divPrincipal{    
        height: 430px;
        width: 350px;
        border: 3px solid #528ec7;
        border-radius: 4px;
        background: #fff;    
 
    }

    .titulo{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #528ec7;
        font-size: 80px;
        width: inherit;
        height: 70px;
        margin-top: 40px;
    }

    .divForm{    
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 30px;
        width: inherit;
        height: 250px;         
    }

    input{
        border: 2px solid #528ec7;
        border-radius: 4px;
        font-family: UBUNTU;
        background-color: #ceddeb;
        height: 46px;
        width: 280px;
        font-size: 19px;
        color: #528ec7;
     }

    .botao{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 49px;
        width: 120px;
        background-color: #528ec7;
        border: 2px solid #ceddeb;
        border-radius: 4px;
        color: #fff;
        font-family: Ubuntu;
        font-size: 32px;
    }

    .cadastro{
        display: flex;
        justify-content: center;
        align-items: center;        
        font-size: 18px;
        width: 120px;
    }

    /* @media only screen and (max-width: 820px) {
        input{    
        font-size: 20px;
    } */

`;