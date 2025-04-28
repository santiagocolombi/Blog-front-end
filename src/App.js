import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Item from './pages/item'; // Importe o componente Item
import Personagens from './pages/Personagens';

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
      </Routes>
    </Router>
  );
}

export default App;