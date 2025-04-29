import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PageLayout from './styles/PageLayout';
import PostCard from '../components/PostCard';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens:', error);
      });
  }, []);

  return (
    <PageLayout>
      <h2>Itens</h2>
      {items.length > 0 ? (
        <div>
          {items.map(item => (
            <PostCard 
              key={item.id} 
              post={item}
            />
          ))}
        </div>
      ) : (
        <p>Não há itens disponíveis.</p>
      )}
      
      <NavigationButton to="/">Voltar</NavigationButton>
    </PageLayout>
  );
};

export default Item;