// src/pages/styles/PostPage-styles.js
import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
`;

export const PostTitle = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  padding-bottom: 1rem;
  
`;

export const PostContent = styled.div`
  color: #34495e;
  line-height: 1.8;
  font-size: 1.1rem;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: anwhere;
  

  /* Alinha divs que contêm imagem e parágrafo lado a lado */
  div:has(img) {
    display: flex;
    align-items: center;
    gap: 10px; 
    margin: 1rem 0;
    border-top: 1px solid;
    bottom: 1px solid;
    padding-top: 5px ;
    
    
  }
  

  div img {
   
    height: auto;
    border-radius: 8px;
  }

  div p {
    margin: 0;
    flex: 1;
    text-align: center;
    
  }
 h2{
  text-align: center;
 }
 footer {
  text-align: center;
  border-top: 1px solid;
 }
 `
; 

export const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: #7f8c8d;
  margin: 2rem 0;
  font-size: 0.8rem;
  text-align: center;
 
  
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
`;

export const PostImage = styled.img`
  max-width: 200px;
  height: auto;
  margin: 0 auto 2px 20px 0;
  border-radius: 8px;
  object-fit: contain;
  display: block;
  
   
`;
export const HeaderPost= styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
 
  
`;
