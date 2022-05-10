import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

import { useDeleteContactMutation } from 'contactsSlice';

function Contacts({ contacts }) {
  // const filter = useSelector(state => state.contacts.filter);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // console.log(data);
  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const contactsToShow = filterContacts();

  return (
    // <h2>Contacts</h2>
    <>
      {contacts && (
        <ContactItem
          contacts={contacts}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
