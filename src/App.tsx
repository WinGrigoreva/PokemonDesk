import React from 'react';
import cn from 'classnames'; // библиотека для замены конкатенации классов
import s from './App.module.scss';

const App: React.FC = () => {
  return (
    // cn используем для записи вместо {s.header + ' color'}>
    <div className={s.container}>
      <h1 className={cn(s.header, ' color')}>Hello, my dear frend!</h1>
    </div>
  );
};

export default App;
