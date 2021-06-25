import React from 'react';

import { useCategories } from '../../hooks';

import NavBarItem from '../NavbarItem';

import './styles.scss';

const NavBar: React.FC = () => {
  const { categories } = useCategories();

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {categories?.map(category => (
          <NavBarItem
            key={category.id}
            id={category.id}
            label={category.label}
            path={category.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
