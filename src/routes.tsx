import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}
export const GeneralMenu: IGeneralMenu[] = [
  { title: 'Home', link: '/', component: () => <HomePage /> },
  { title: 'Pokédex', link: '/pokedex', component: () => <Pokedex title="Pokedex" /> },
  { title: 'Legendaries', link: '/legendaries', component: () => <Pokedex title="Legendaries" /> },
  { title: 'Documentation', link: '/documentation', component: () => <Pokedex title="Documentation" /> },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}
const routes = GeneralMenu.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
