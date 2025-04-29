// src/pages/PostPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  PostContainer,
  PostTitle,
  PostContent,
  PostMeta,
  LoadingText,
  PostImage,
  HeaderPost,
  Paragrafo,
  
} from './styles/PostPage-styles';
import NavigationButton from '../components/NavigationButton';

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
      <HeaderPost>
      {post.image_url && (
        <PostImage
          src={`http://localhost:3000${post.image_url}`}
          alt={post.title}
          
        />
        
      )}
      <PostTitle>{post.title}</PostTitle>
      </HeaderPost>
      
      <PostContent>
        {post.content.split('\n').map((paragraph, i) => (
          <Paragrafo key={i}>{paragraph}</Paragrafo>
        ))}
      </PostContent>
    
      <PostMeta>
        {post.created_at && (
          <span>
            Publicado em: {new Date(post.created_at).toLocaleDateString('pt-BR')}
          </span>
        )}
      </PostMeta>
  
      <NavigationButton to="/posts">Voltar aos Posts</NavigationButton>
    
    </PostContainer>
    
  );
  
};

export default PostPage;
