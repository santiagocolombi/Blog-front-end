// src/pages/styles/PostCard-styles.js
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Impede vazamento interno */
`;

export const PostImageStyled = styled.img`
  width: 70px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0; /* ESSENCIAL para containers flex */
  
`;

export const Title = styled.h3`
  font-weight: bold;
  color: #2c3e50;
  margin: 0 0 4px 0; /* Reduzi a margem inferior */
  line-height: 1.2; /* Espaçamento entre linhas mais compacto */
`;

export const Summary = styled.p`
  color: #34495e;
  word-break: break-word;
  overflow-wrap: anywhere;
  hyphens: auto;
  margin: 0 0 6px 0; /* Margem inferior reduzida */
  line-height: 1.4; /* Mais compacto que o padrão */
  font-size: 0.9rem; /* Opcional: fonte um pouco menor */
`;

export const ReadMore = styled.a`
  color: #2980b9;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.8rem; /* Opcional: tamanho menor */
  display: inline-block; /* Melhor controle de espaçamento */
  margin-top: 4px; /* Espaço mínimo acima do link */

  &:hover {
    text-decoration: underline;
  }
`;
