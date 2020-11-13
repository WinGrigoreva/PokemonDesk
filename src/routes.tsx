import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GeneralMenu: IGeneralMenu[] = [
  { title: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { title: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <Pokedex title="Pokedex" /> },
  { title: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <Pokedex title="Legendaries" /> },
  { title: 'Documentation', link: LinkEnum.DOCUMENTATION, component: () => <Pokedex title="Documentation" /> },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}
const routes = GeneralMenu.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
