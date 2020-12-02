import React from 'react';
import { IPokemonCardProps } from '../../interface/pokemons';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

const PokemonCard: React.FC<IPokemonCardProps> = ({ stats, types, img, name }) => {
  // const typePokemonColor = switch (types[0]){
  //   case
  // }
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
          {types.map((el) => {
            return <span className={s.label}>{el}</span>;
          })}
        </div>
      </div>
      <div className={s.pictureWrap} style={{ background: 'yellow' }}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
