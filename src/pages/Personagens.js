import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PageLayout from './styles/PageLayout';
import PostCard from '../components/PostCard'; // Importa o PostCard
import SearchBar from '../components/SearchBar';

const Personagens = () => {
  const [personagens, setPersonagens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/personagens')
      .then(response => {
        setPersonagens(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar personagens:', error);
      });
  }, []);
  const filteredPersonagem = personagens.filter(personagem =>
    personagem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <PageLayout>
     <h2 style={{ textAlign: 'center' }}>Personagens</h2>

     <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar Personagem..."
      />

      {filteredPersonagem.length > 0 ? (
        <div>
          {filteredPersonagem.map(personagem => (
            <PostCard 
              key={personagem.id} 
              post={personagem}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <img
            src="http://localhost:3000/uploads/1746108165317-Triste.png"
            alt="Imagem ilustrativa de item não encontrado"
            style={{ width: '200px', marginBottom: '20px' }}
          />
          <p>Não há Personagens disponíveis.</p>
        </div>
      )}
      
      <NavigationButton to="/">Voltar</NavigationButton>
    </PageLayout>
  );
};


export default Personagens;
