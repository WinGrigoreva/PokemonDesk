import React from 'react';
import Header from '../../components/Header';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';
import data from '../../Pokemons';
import s from './Pokedex.module.scss';

interface PokedexProps {
  title?: string;
}
const Pokedex: React.FC<PokedexProps> = ({ title }) => {
  return (
    <>
      <Header />
      <div className={s.root}>
        <div>{title}</div>
        <div className={s.pokedex}>
          {data.map((el: IPokemonCardProps) => (
            <PokemonCard stats={el.stats} types={el.types} img={el.img} name={el.name} key={el.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
