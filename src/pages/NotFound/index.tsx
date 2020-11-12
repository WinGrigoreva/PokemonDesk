import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import NotFoundImg from './assets/NotFound.png';
import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.NotFound}>
      <div className={s.NotFoundImage}>
        <img src={NotFoundImg} alt="Page Not Found" />
      </div>
      <div className={s.NotFoundText}>
        <span>The rocket team</span>
        <span> has won this time.</span>
      </div>
      <Button onClick={(event) => navigate('/')} color="#F2CB07">
        Return
      </Button>
    </div>
  );
};

export default NotFound;
