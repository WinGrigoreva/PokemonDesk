import React, { useState } from 'react';
import Heading from '../../components/Heading';
// import data from '../../Pokemons';
import s from './Pokedex.module.scss';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';
import useData from '../../hook/getData';

interface PokedexProps {
  title?: string;
}

const Pokedex: React.FC<PokedexProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((search) => ({
      ...search,
      name: event.target.value,
    }));
  };

  if (isError) {
    return <div>We are sorry, something wrong...</div>;
  }

  return (
    <>
      <div className={s.pokedex}>
        <div>{title}</div>
        <Heading size="xl" />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={s.pokedex__SearcTitle}>
            {data?.total} <b>pokemons</b> for you to choose your favorite{' '}
          </div>
        )}
        <Heading />
        <div className={s.pokedex__Search}>
          <input
            className={s.pokedex__SearchInner}
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Encuentra tu pokémon..."
          />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={s.pokedex__cards}>
            {!isLoading &&
              data?.pokemons.map((el: IPokemonCardProps) => (
                <PokemonCard stats={el.stats} types={el.types} img={el.img} name={el.name} key={el.id} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Pokedex;
