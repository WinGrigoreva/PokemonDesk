import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import s from './App.module.scss';
import './images/Banner.png';

const App = () => {
  return (
    <div className={s.content}>
      <Header />
      <div className={s.find}>
        <div className={s.find__inner}>
          <p className={s.find__title}>Find all your favorite Pokemon</p>
          <p className={s.find__text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <input className={s.find__button} type="button" value="See pokemons" />
        </div>
        <img className={s.find__image} src="../images/Banner.png" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
