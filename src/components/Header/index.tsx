import React from 'react';
import s from './Header.module.scss';
import MenuItem from '../MenuItem';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { GeneralMenu } from '../../routes';

// interface IMenu {
//   id: number;
//   text: string;
//   link: string;
// }

const Header = () => {
  //   const menu: IMenu[] = [
  //     { id: 1, text: 'Home', link: '/' },
  //     { id: 2, text: 'Pokédex', link: '/pokedex' },
  //     { id: 3, text: 'Legendaries', link: '/legendaries' },
  //     { id: 4, text: 'Documentation', link: '/documentation' },
  //   ];

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <a href="/" className={s.header__logo}>
            <Logo />
          </a>
          <nav>
            <ul>
              {GeneralMenu.map(({ title, link }) => {
                return <MenuItem text={title} link={link} key={title} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
