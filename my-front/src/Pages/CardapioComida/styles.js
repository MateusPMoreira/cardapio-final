import styled from "styled-components";
export const CssCardapioComida = styled.div`

h1{
  width: 100%;
  height: 50px;
  font-size: 20px;
  background: #ff6200;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subtitulo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
 
.comida-lista{
  /* height: 150px; */
  width: 70%; 
  margin-left: 15%;
  border-radius: 2px;
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
}

.subtitulo{
  margin-top: 10px;
  margin-bottom: 10px;

}
 
.lista, .lista-ultimo{
  background: #f0f0f0;
  height: 26px;  

}

.lista-ultimo{
  margin-bottom: 25px;
}
a{ 
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;  
  color: #ff6200;
  margin-bottom: 20px;
  }
`;