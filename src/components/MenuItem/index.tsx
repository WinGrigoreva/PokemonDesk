import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './MenuItem.module.scss';

interface IMenuItemProps {
  text: string;
  link: string;
}
const MenuItem = (props: IMenuItemProps) => {
  const { text, link } = props;
  const path = usePath();

  return (
    <li className={s['menu__list-item']}>
      <A href={link} className={cn(s['menu__list-link'], { [s.activeLink]: link === path })}>
        {text}
      </A>
    </li>
  );
};

export default MenuItem;
