// src/components/PostCard.js
import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 10px;
`;

const PostCard = ({ post }) => {
  return (
    <Card>
      <small>{post.title}</small>
      <p>{post.content.substring(0, 150)}...</p>
      <a href={`/posts/${post.id}`}>Leia mais</a>
      
    
    </Card>
  );
};

export default PostCard;
