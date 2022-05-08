import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import st from './Contacts.module.css';

function Contacts({ id, name, number }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsToShow = filterContacts();

  return (
    <ul className={st.list}>
      {contactsToShow.map(({ id, name, number }) => (
        <li className={st.element} key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button
            className={st.delete}
            onClick={() => dispatch(deleteContact({ id }))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
