import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App: React.FC = () => {
  return (
    // cn (библиотека для замены конкатенации классов) используем для записи вместо {s.header + ' color'}>
    <div className={s.container}>
      <h1 className={cn(s.header, ' color')}>Hello, my dear frend!</h1>
    </div>
  );
};

export default App;
