import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import Loader from 'components/Loader';
import st from './Contacts.module.css';

function Contacts() {
  const filterValue = useSelector(state => state.filter.value);
  const { data, isFetching } = useGetContactsQuery();

  const contactsToShow = data?.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {isFetching && <Loader />}
      <table className={st.table}>
        <tbody>
          {contactsToShow?.map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </tbody>
      </table>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
