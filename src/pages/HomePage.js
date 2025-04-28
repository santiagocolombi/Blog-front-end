import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import AddPostButton from '../components/AddPostButton';
import DeletePostButton from '../components/DeletePostButton'
const HomeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);  // Estado para os posts
  const [error, setError] = useState(null); // Estado para erros

  // useEffect para buscar os posts da API
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => {
        console.log(response);  // Verifique a resposta toda (incluindo headers)
        if (!response.ok) {
          throw new Error(`Erro ao buscar posts: ${response.statusText}`);
        }
        
        // Verifique o conteúdo da resposta
        return response.text();  // Altere para .text() para verificar o conteúdo
      })
      .then((data) => {
          // Veja o que está sendo retornado
        try {
          const jsonData = JSON.parse(data);  // Tente fazer o parse manualmente
          setPosts(jsonData);  // Atualize os posts
        } catch (error) {
          console.error('Erro ao parsear JSON:', error);  // Se falhar ao parsear
        }
      })
      .catch((error) => {
        setError(error.message);  // Defina o erro caso ocorra
        console.error('Erro ao buscar posts:', error);  // Log do erro
      });
  }, []);
  
  

  return (
    <HomeWrapper>
      <h2>Todos os posts</h2>
      {error ? (
        <p>Erro ao carregar posts: {error}</p> // Exibe erro se ocorrer algum
      ) : posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />) // Mapeia e exibe os posts
      ) : (
        <p>Carregando posts...</p> // Exibe uma mensagem de carregamento enquanto os posts não são carregados
      )}
      <AddPostButton/>
      <DeletePostButton/>
    </HomeWrapper>
  );
};

export default HomePage;
