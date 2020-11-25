import React from 'react';
import useData from '../../hook/getData';
import { IPokemonCardProps } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemonCardProps>('getPokemon', { id: 25 });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>Hello Pokemon {data?.name}</div>;
};

export default Pokemon;
