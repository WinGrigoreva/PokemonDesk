import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import s from './Home.module.scss';
import Layout from '../../components/Layout/Layout';
import Parallax from '../../components/Parallax/Parallax';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite
            <b> Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={(event) => {}}>See pokemons</Button>
          {/* <Button onClick={(event) => {}} color="#FFFFFF">
            See pokemons
          </Button>
          <Button onClick={(event) => {}} size="small">
            See pokemons
          </Button>
          <Button onClick={(event) => {}} width="100%">
            See pokemons
          </Button> */}
        </div>
        <div>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
