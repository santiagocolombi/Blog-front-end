import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import AddPostButton from '../components/AddPostButton';
import DeletePostButton from '../components/DeletePostButton'
//sem receber page layout
const HomeWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza todos os filhos */

  > * {
    width: 100%;
    max-width: 100%;
  }
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);  // Estado para os posts
  const [error, setError] = useState(null); // Estado para erros

  // useEffect para buscar os posts da API
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => {
      
        if (!response.ok) {
          throw new Error(`Erro ao buscar posts: ${response.statusText}`);
        }
        
        
        return response.text();
      })
      .then((data) => {
          
        try {
          const jsonData = JSON.parse(data);  
          setPosts(jsonData); 
        } catch (error) {
          console.error('Erro ao parsear JSON:', error);  
        }
      })
      .catch((error) => {
        setError(error.message);  
        console.error('Erro ao buscar posts:', error);  
      });
  }, []);
  
  

  return (
    <HomeWrapper>
      <h2>Todos os posts</h2>
      {error ? (
        <p>Erro ao carregar posts: {error}</p> 
      ) : posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />) // Mapeia e exibe os posts
      ) : (
        <p>Carregando posts...</p> 
      )}
      <AddPostButton/>
      <DeletePostButton/>
    </HomeWrapper>
  );
};

export default HomePage;
