import styled from 'styled-components';
// Botão principal
export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

// Container do formulário
export const FormContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  font-size: 16px;
  resize: vertical;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0b7dda;
  }
`;