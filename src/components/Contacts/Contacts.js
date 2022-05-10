import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import Loader from 'components/Loader';
import { useGetContactsQuery, useDeleteContactMutation } from 'contactsSlice';

function Contacts() {
  // const filter = useSelector(state => state.contacts.filter);

  const { data: contacts, isFetching } = useGetContactsQuery();
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
      {isFetching && <Loader />}
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
