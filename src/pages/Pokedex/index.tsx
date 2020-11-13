import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';
// import data from '../../Pokemons';
import s from './Pokedex.module.scss';

interface PokedexProps {
  title?: string;
}
interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: [el: IPokemonCardProps];
}
const usePokemons = () => {
  const [data, setData] = useState<IData>({
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
    pokemons: new Array<IPokemonCardProps>(),
  } as IData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex: React.FC<PokedexProps> = ({ title }) => {
  const { data, isLoading, isError } = usePokemons();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>We are sorry, something wrong...</div>;
  }
  return (
    <>
      <div className={s.root}>
        <div>{title}</div>
        <Heading size="xl" />
        {data?.total} <b>pokemons</b> for you to choose your favorite
        <Heading />
        <div className={s.pokedex}>
          {data?.pokemons.map((el: IPokemonCardProps) => (
            <PokemonCard stats={el.stats} types={el.types} img={el.img} name={el.name} key={el.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Pokedex;
