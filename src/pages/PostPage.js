// src/pages/PostPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButton from '../components/NavigationButton';

// Componentes estilizados
const PostContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

const PostTitle = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
`;

const PostContent = styled.div`
  color: #34495e;
  line-height: 1.8;
  font-size: 1.1rem;
  white-space: pre-line; // Mantém quebras de linha do texto

  p {
    margin-bottom: 1.5rem;
  }
`;

const PostMeta = styled.div`
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
`;

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingText>Carregando post...</LoadingText>;
  if (!post) return <LoadingText>Post não encontrado</LoadingText>;

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      
      <PostMeta>
        {post.created_at && (
          <span>
            Publicado em: {new Date(post.created_at).toLocaleDateString('pt-BR')}
          </span>
        )}
      </PostMeta>
      
      <PostContent>
        {post.content.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </PostContent>
      
      <NavigationButton to="/posts">Voltar aos Posts</NavigationButton>
    </PostContainer>
  );
};

export default PostPage;