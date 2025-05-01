import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PostCard from '../components/PostCard';
import PageLayout from './styles/PageLayout';
import SearchBar from '../components/SearchBar';

const Guia = () => {
  const [guia, setGuia] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/guia')
      .then(response => {
        setGuia(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar o guia:', error);
      });
  }, []);

  const filteredGuias = guia.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <h2 style={{ textAlign: 'center' }}>Guia de personagens</h2>

      {guia.length > 0 && (
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar Personagem..."
        />
      )}

      {filteredGuias.length > 0 ? (
        <div>
          {filteredGuias.map(item => (
            <PostCard 
              key={item.id} 
              post={item}
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
          <p>Não há Guias disponíveis.</p>
        </div>
      )}

      <NavigationButton to="/">Voltar</NavigationButton>
    </PageLayout>
  );
};

export default Guia;
