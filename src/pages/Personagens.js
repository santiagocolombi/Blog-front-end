import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PageLayout from './styles/PageLayout';
import PostCard from '../components/PostCard'; // Importa o PostCard

const Personagens = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/personagens')
      .then(response => {
        setPersonagens(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar personagens:', error);
      });
  }, []);

  return (
    <PageLayout>
      <h2>Personagens</h2>
      {personagens.length > 0 ? (
        <div>
          {personagens.map(personagem => (
            <PostCard key={personagem.id} post={personagem} />
          ))}
        </div>
      ) : (
        <p>Não há personagens disponíveis.</p>
      )}
      <NavigationButton to="/"></NavigationButton>
    </PageLayout>
  );
};

export default Personagens;
