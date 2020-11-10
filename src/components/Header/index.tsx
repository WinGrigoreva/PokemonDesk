import React from 'react';
import s from './Header.module.scss';
import MenuItem from '../MenuItem';
import { ReactComponent as Logo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  text: string;
  link: string;
}

const Header = () => {
  const menu: IMenu[] = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Pokédex', link: '/pokedex' },
    { id: 3, text: 'Legendaries', link: '/' },
    { id: 4, text: 'Documentation', link: '/' },
  ];
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <a href="/" className={s.header__logo}>
            <Logo />
          </a>
          <nav>
            <ul>
              {menu.map((el) => {
                return <MenuItem text={el.text} link={el.link} key={el.id} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
