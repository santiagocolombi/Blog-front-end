import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationButton from '../components/NavigationButton';
import PageLayout from './styles/PageLayout';
import PostCard from '../components/PostCard'; // Importa o PostCard

const Artefatos = () => {
  const [artefatos, setArtefatos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/artefatos')
      .then(response => {
        setArtefatos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar artefatos:', error);
      });
  }, []);

  return (
    <PageLayout>
      <h2 style={{ textAlign: 'center' }}>Artefatos</h2>
      {artefatos.length > 0 ? (
        <div>
          {artefatos.map(artefato => (
            <PostCard key={artefato.id} post={artefato} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Não há artefatos disponíveis.</p>
      )}
      <NavigationButton to="/"></NavigationButton>
    </PageLayout>
  );
};

export default Artefatos;
