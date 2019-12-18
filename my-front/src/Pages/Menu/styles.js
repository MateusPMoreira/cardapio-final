 
import styled from "styled-components";
 

export const CssLogin = styled.div`
    *{ 
        font-family: UBUNTU;
     
    }

    a{
      text-decoration: none;
      margin: 8px;
      color:#528ec7;
    }  
    .cadastro{
      text-decoration: none;
    }
    .comida,
    .bebida, 
    .sobremesa,
    .cadComida,
    .cadBebida,
    .cadSobremesa{
      background-color: white;
      border-radius: 4px;
      border: 4px solid #528ec7;
      width: 240px;
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .cadastrar,  
    .cardapios{

        background: #ceddeb;
        /* margin-top: 25%; */
        display: flex;
        justify-content:space-evenly;
        flex-direction: column;
        text-decoration:none;
        cursor: pointer;        
        align-items: center;
        width: 300px;
        height: 400px;
        border: 4px solid #528ec7;
        border-radius: 7px;
    }
    .cardapios{
      margin-top: 10px;
    }



    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        width: 100%;
        margin: 5px;
        /* background: #ceddeb; */
    }
`;