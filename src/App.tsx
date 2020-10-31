import React from 'react';
import s from './App.modules.scss'; 
import './custom.css';
import cn from 'classnames'; //билиотека для замены конкатенации классов
import Form, {IFormProps} from './components/Form';

const User: IFormProps = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 22,
};
const App: React.FC = () => {
    return (
        // cn используем для записи вместо {s.header + ' color'}>
        <div className={s.container}> 
            <h1 className={cn(s.header, ' color')}>Hello, my dear frend!</h1>
            <Form {...User}/>
        </div>
    )
}

export default App;