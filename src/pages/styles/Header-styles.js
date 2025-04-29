import { Link } from 'react-router-dom'; // Importe o Link
import styled from "styled-components";
export const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

// Mude de 'a' para 'Link'
export const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;

 
`;