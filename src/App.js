import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Personagens from './pages/Personagens';
import Item from './pages/item';
import Artefatos from './pages/Artefatos';
import Guia from './pages/GuiaDePersonagem';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/item" element={<Item />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/artefatos" element={<Artefatos />} />
        <Route path="/guia" element={<Guia/>} />
      </Routes>
    </Router>
  ); //Colocar as rotas em um arquivo de routes
}

export default App;