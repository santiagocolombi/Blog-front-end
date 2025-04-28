import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Botão principal
const Button = styled.button`
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
const FormContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  font-size: 16px;
  resize: vertical;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`;

const Option = styled.option`
  font-size: 16px;
`;

const SubmitButton = styled.button`
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

export default function AddPostButton() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('geral');  // Estado para a categoria

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/posts', {
        title,
        content,
        category,  // Envia a categoria selecionada
      });
      alert('Post criado com sucesso!');
      setTitle('');
      setContent('');
      setCategory('geral');  // Reseta a categoria para 'geral'
      setShowForm(false);
    } catch (error) {
      console.error('Erro ao criar post:', error);
      alert('Erro ao criar post');
    }
  };

  return (
    <div>
      <Button onClick={() => setShowForm(!showForm)}>
        + Novo Post
      </Button>

      {showForm && (
        <FormContainer>
          <Input
            type="text"
            placeholder="Título do Post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            rows="5"
            placeholder="Conteúdo do Post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <Option value="geral">Geral</Option>
            <Option value="item">Item</Option>
            <Option value="personagem">Personagem</Option>
            <Option value="artefato">Artefato</Option>
          </Select>
          <SubmitButton onClick={handleSubmit}>
            Criar Post
          </SubmitButton>
        </FormContainer>
      )}
    </div>
  );
}
