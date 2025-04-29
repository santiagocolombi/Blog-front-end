import React, { useState } from 'react';
import axios from 'axios'; 
import { 
  Button,
  FormContainer,
  Input,
  Textarea,
  Select,
  Option,
  SubmitButton} from '../pages/styles/AddPostButton-style'


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
