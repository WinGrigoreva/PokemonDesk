import React from 'react';
import cn from 'classnames'; // билиотека для замены конкатенации классов
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={cn(s.footer, ' container')}>
      <p>
        Make with <span>&#10084;</span>
      </p>
      <p>Ours Team</p>
    </div>
  );
};

export default Footer;
