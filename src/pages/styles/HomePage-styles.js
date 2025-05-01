 import styled from "styled-components";
 export const HomeWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center; 

  > * {
    width: 100%;
    max-width: 100%;
  }
  h2{
    text-align: center;
  }
  
  input {
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  width: 100%;
  max-width: 400px; 
  margin: 0 auto 16px auto;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
  border-color: #999;
  box-shadow: 0 0 8px rgba(150, 150, 150, 0.4); 
}
}

`;