import React from 'react';
import s from './Form.modules.scss';

export interface IFormProps {
  lastName: string;
  firstName: string;
  familyName?: string;
  age: number;
}
const Form: React.FC<IFormProps> = (props) => {
  return (
    <form action="" className={s.form}>
      <label htmlFor="firstNameId">Имя</label>
      <input
        type="text"
        placeholder={props.firstName}
        id="firstNameId"
        required
      />
      <label htmlFor="lastNameId">Фамилия</label>
      <input
        type="text"
        placeholder={props.lastName}
        id="lastNameId"
        required
      />
      <label htmlFor="familyNameId">Отчество</label>
      <input type="text" placeholder={props.familyName} id="familyNameId" />
      <label htmlFor="ageId">Возраст</label>
      <input
        type="text"
        placeholder={props.age.toString()}
        id="ageId"
        required
      />
      <input type="submit" value="Подтвердить" />
    </form>
  );
};
export default Form;
