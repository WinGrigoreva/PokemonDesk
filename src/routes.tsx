import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  title: string;
  link: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GeneralMenu: IGeneralMenu[] = [
  { title: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { title: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <Pokedex title="Pokedex" /> },
  { title: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <Pokedex title="Legendaries" /> },
  { title: 'Documentation', link: LinkEnum.DOCUMENTATION, component: () => <Pokedex title="Documentation" /> },
];

const SecondRoutes: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}
const routes = [...GeneralMenu, ...SecondRoutes].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
