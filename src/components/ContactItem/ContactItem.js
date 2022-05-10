import st from './ContactItem.module.css';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contactsApi';

function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { id, name, number } = contact;

  const onDeleteContact = () => {
    deleteContact(id);
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <>
      <tr className={st.element} key={id}>
        <td className={st.name}>{name}: </td>
        <td>{number}</td>
        <td>
          <button
            disabled={isDeleting}
            className={st.delete}
            onClick={onDeleteContact}
          >
            {isDeleting ? '.....' : 'delete'}
          </button>
        </td>
      </tr>
    </>
  );
}

export default ContactItem;
