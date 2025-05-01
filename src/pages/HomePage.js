import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import AddPostButton from '../components/AddPostButton';
import DeletePostButton from '../components/DeletePostButton'
import { HomeWrapper } from './styles/HomePage-styles';


const HomePage = () => {
  const [posts, setPosts] = useState([]);  // Estado para os posts
  const [error, setError] = useState(null); // Estado para erros
  const [searchTerm, setSearchTerm] = useState('');

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
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <HomeWrapper>
    <h2>Todos os posts</h2>
    <input
      type="text"
      placeholder="Buscar Post específico..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {error ? (
      <p>Erro ao carregar posts: {error}</p>
    ) : filteredPosts.length > 0 ? (
      filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
    ) : (
      <div style={{ textAlign: 'center' }}>
        <img
          src="http://localhost:3000/uploads/1746108165317-Triste.png"
          alt="Imagem ilustrativa de item não encontrado"
          style={{ width: '200px', marginBottom: '20px' }}
        />
        <p>Nenhum post encontrado.</p>
      </div>
    )}
    <AddPostButton />
    <DeletePostButton />
  </HomeWrapper>
  );
};

export default HomePage;
