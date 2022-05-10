import st from './ContactItem.module.css';
import Loader from 'components/Loader';
function ContactItem({ contacts, onDelete, deleting }) {
  return (
    <>
      {' '}
      {deleting && <Loader />}
      <table className={st.table}>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <tr className={st.element} key={id}>
              <td className={st.name}>{name}: </td>
              <td>{number}</td>
              <td>
                <button className={st.delete} onClick={() => onDelete(id)}>
                  delete
                </button>
              </td>
            </tr>
            // <li className={st.element} key={id}>
            //   <span className={st.name}>{name}: </span>
            //   <span className={st.phone}>{number}</span>
            //   <button className={st.delete} onClick={() => onDelete(id)}>
            //     {deleting ? 'deleting...' : 'delete'}
            //   </button>
            // </li>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ContactItem;
