import { useState } from 'react';
import shortid from 'shortid';
import styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import operations from './../../redux/operations';
import { getItems } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const [number, setNumber] = useState('');
  const handleNumberChange = e => {
    setNumber(e.target.value)
  }

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const savedContacts = useSelector(getItems);
  const onSubmit = ({name, number}) => dispatch(operations.addContact({name, number}));
  const clearInput = () => {
    setName('');
    setNumber('');
  }

    const handlerSubmit = (e) => {
    e.preventDefault();
    savedContacts.find(contact => contact["name"] === name) 
      ? alert("The name is already exist")
      : savedContacts.find(contact => contact["number"] === number) 
      ? alert("The number  is already exist") 
      : onSubmit({name, number});

    clearInput(); 
 }


  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
        <label htmlFor={nameInputId}>Name </label>          
        <input
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
        />
    
        <label htmlFor={numberInputId}>Number </label>          
        <input
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
        />
    
         <button type="submit">Add</button>
      </form>            
      )
  
}

export default ContactForm;