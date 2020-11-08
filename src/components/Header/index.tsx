import React from 'react';
import s from './Header.module.scss';
import '../../images/Logo.svg';
import MenuItem from '../MenuItem';

const Header = () => {
  const menuText = ['Home', 'Pokédex', 'Legendaries', 'Documentation'];
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <a href="/" className={s.header__logo}>
            <img src="../../images/Logo.svg" alt="" />
          </a>
          <nav>
            <ul>
              {menuText.map((el) => {
                return <MenuItem text={el} key={el} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
