import styled from 'styled-components';
export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #2196F3; /* Azul fixo */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  margin: 10px;
  min-width: 100px;
 
  &:hover {
    background-color: #0b7dda; /* Tom mais escuro de azul no hover */
  }
  
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; // ou center
  margin-top: 2rem;
`;