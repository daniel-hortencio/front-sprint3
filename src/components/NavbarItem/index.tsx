import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavLinkTypes } from '../../types/navLinksTypes';

import './styles.scss';

const NavBarItem: React.FC<NavLinkTypes> = ({ id, path = '', label }) => {
  return (
    <NavLink key={id} to={path || ''}>
      {label}
    </NavLink>
  );
};

export default NavBarItem;
