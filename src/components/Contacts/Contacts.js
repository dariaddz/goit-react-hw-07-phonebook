import React from 'react';
import PropTypes from 'prop-types';
// import { deleteContact } from 'redux/slice';
// import { useSelector, useDispatch } from 'react-redux';
import {
  useGetContactsQuery,
  // useDeleteContactMutation
} from 'contactsSlice';
import st from './Contacts.module.css';

function Contacts({ id, name, number }) {
  // const filter = useSelector(state => state.contacts.filter);

  const {
    data,
    // error, isLoading
  } = useGetContactsQuery();
  // const { deleteContact } = useDeleteContactMutation;
  console.log(data);
  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const contactsToShow = filterContacts();

  return (
    // <h2>Contacts</h2>
    <ul className={st.list}>
      {data.map(({ id, name, number }) => (
        <li className={st.element} key={id}>
          <span>{name}: </span>
          <span className={st.phone}>{number}</span>
          {/* <button className={st.delete} onClick={() => deleteContact(id)}>
            delete
          </button> */}
        </li>
      ))}
    </ul>

    // <ul className={st.list}>
    //   {contactsToShow.map(({ id, name, number }) => (
    //     <li className={st.element} key={id}>
    //       <span>{name}: </span>
    //       <span>{number}</span>
    //       <button
    //         className={st.delete}
    //         onClick={() => dispatch(deleteContact({ id }))}
    //       >
    //         delete
    //       </button>
    //     </li>
    //   ))}
    // </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
