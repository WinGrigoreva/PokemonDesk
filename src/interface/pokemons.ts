export interface IPokemons {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: [el: IPokemonCardProps];
}
export interface IStats {
  hp?: number;
  attack: number;
  defense: number;
  ['special-attack']?: number;
  ['special-defense']?: number;
  speed?: number;
}
export interface IPokemonCardProps {
  ['name_clean']?: string;
  abilities?: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  ['base_experience']?: number;
  height?: number;
  id?: number;
  ['is_default']?: boolean;
  order?: number;
  weight?: number;
}
// или если описывать интерфейс на основае данных полученных с АПИ:
// ler pokemonsData = {
//     ...
// }
// type pokemonsType = typeof pokemonsData;
