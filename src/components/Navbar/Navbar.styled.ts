import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 80px;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: white;
`;
