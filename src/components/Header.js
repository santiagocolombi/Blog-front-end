import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link
import HomePage from '../pages/HomePage';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

// Mude de 'a' para 'Link'
const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #ff6f61;
    transition: color 0.3s ease;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Meu Blog</h1>
      <Navbar>
        <NavItem to="/">HomePage</NavItem>
        <NavItem to="/item">Itens</NavItem>
        <NavItem to="/personagens">Personagens</NavItem>
        <NavItem to="/guias">Guias de Personagens</NavItem>
        <NavItem to="/artefatos">Artefatos</NavItem>
        <NavItem to="/curiosidades">Curiosidades</NavItem>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;