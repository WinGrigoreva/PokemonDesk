import React from 'react';
import s from './App.modules.scss';
import './custom.css';
import cn from 'classnames'; //билиотека для замены конкатенации классов

const App = () => {
    return (
        // cn используем для записи вместо {s.header + ' color'}>
        <div className={cn(s.header, ' color')}> 
            Hello, my dear frend!
        </div>
    )
}

export default App;