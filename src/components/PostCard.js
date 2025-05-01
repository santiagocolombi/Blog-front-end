import React from 'react';

import {
  Card,
  PostImageStyled,
  ContentWrapper,
  Title,
  ReadMore,
} from '../pages/styles/PostCard-styles';

const PostCard = ({ post }) => {
  return (
    <Card>
      {post.image_url && (
        <PostImageStyled
          src={`http://localhost:3000${post.image_url}`}
          alt={post.title}
          onError={(e) => e.target.style.display = 'none'} // Fallback para imagens quebradas
        />
      )}
      <ContentWrapper>
        <Title>{post.title}</Title>
       
        <ReadMore href={`/posts/${post.id}`}>Leia mais</ReadMore>
      </ContentWrapper>
    </Card>
  );
};

export default PostCard;