import React from 'react';
import s from './MenuItem.module.scss';

interface IMenuItemProps {
  text: string;
  link: string;
}
const MenuItem = (props: IMenuItemProps) => {
  const { text, link } = props;
  return (
    <li className={s['menu__list-item']}>
      <a href={link} className={s['menu__list-link']}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
