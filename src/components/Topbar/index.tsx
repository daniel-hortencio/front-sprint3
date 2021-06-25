import React from 'react';

import Navbar from '../Navbar';

import ImageMenu from '../../assets/menu.svg';
import ImageLogoSmall from '../../assets/rchlo.svg';
import ImageLogo from '../../assets/riachuelo.svg';
import SearchBar from '../SearchBar';

import './styles.scss';

const TopBar: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className={ImageMenu} src="../../assets/menu.svg" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src="../../assets/close.svg" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src={ImageLogoSmall} alt="Logo" />
          </h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">
            <img className="header__img" src={ImageLogo} alt="Logo" />
          </h1>
        </div>

        <SearchBar />

        <Navbar />
      </div>
    </header>
  );
};

export default TopBar;
