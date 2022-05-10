import { useState } from 'react';
import { useAddContactMutation } from 'redux/contactsApi';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

import st from './PhonebookForm.module.css';

function PhonebookForm({ contacts }) {
  const [addContact, isSuccess] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const validationName =
    contacts && contacts.find(contact => contact.name === name);

  const validationNumber =
    contacts && contacts.find(contact => contact.number === number);

  const onHandleSubmit = evt => {
    evt.preventDefault();

    if (validationName) {
      toast.error('You already have this name in your phonebook');
      return;
    }
    if (validationNumber) {
      toast.error('You already have this number in your phonebook');
      return;
    }
    addContact({ name, number });

    isSuccess && toast.success('New contact was added to you phonebook');

    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label className={st.label}>
          Name
          <input
            className={st.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onHandleChange}
          />
        </label>
        <label className={st.label}>
          Number
          <input
            className={st.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onHandleChange}
          />
        </label>
        <button className={st.button} type="submit">
          Add Contact
        </button>
      </form>
      <Toaster />
    </>
  );
}

PhonebookForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default PhonebookForm;
