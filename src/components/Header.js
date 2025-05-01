import React from 'react';
import {Navbar, NavItem, HeaderWrapper } from '../pages/styles/Header-styles'



const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Meu Blog</h1>
      <Navbar>
        <NavItem to="/">HomePage</NavItem>
        <NavItem to="/item">Itens</NavItem>
        <NavItem to="/personagens">Personagens</NavItem>
        <NavItem to="/guia">Guias de Personagens</NavItem>
        <NavItem to="/artefatos">Artefatos</NavItem>
        <NavItem to="/curiosidades">Curiosidades</NavItem>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;