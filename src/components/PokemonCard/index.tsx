import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

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
const PokemonCard: React.FC<IPokemonCardProps> = ({ stats, types, img, name }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="xs" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{types.join(', ')}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
