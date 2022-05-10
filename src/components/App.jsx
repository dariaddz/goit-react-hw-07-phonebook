import PhonebookForm from "./PhonebookForm";
import Contacts from "./Contacts";
// import FilterField from "./Filter";
import { useGetContactsQuery } from 'contactsSlice';
import Loader from 'components/Loader';

export default function App() {
 
    const { data: contacts, isFetching } = useGetContactsQuery();
    return (
      <>
         {isFetching && <Loader />}
        <h1>Phonebook</h1>
        <PhonebookForm contacts={contacts}/>
        
        <h2>Contacts</h2>
        {/* <FilterField/> */}
        <Contacts contacts={contacts}/>
                  
      </>
    )
}


