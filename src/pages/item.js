import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PageLayout from './styles/PageLayout';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';

const Item = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens:', error);
      });
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <h2 style={{ textAlign: 'center' }}>Itens</h2>

      {items.length > 0 && (
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar item..."
        />
      )}

      {filteredItems.length > 0 ? (
        <div>
          {filteredItems.map(item => (
            <PostCard key={item.id} post={item} />
          ))}
        </div>
      ) : (
        
        <div style={{ textAlign: 'center' }}>
          <img
            src="http://localhost:3000/uploads/1746108165317-Triste.png"
            alt="Imagem ilustrativa de item não encontrado"
            style={{ width: '200px', marginBottom: '20px' }}
          />
          <p>Não há itens disponíveis.</p>
        </div>
        
      )}

      <NavigationButton to="/">Voltar</NavigationButton>
    </PageLayout>
  );
};

export default Item;
