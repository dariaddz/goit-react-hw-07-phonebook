import PhonebookForm from "./PhonebookForm";
import Contacts from "./Contacts";
import FilterField from "./Filter";

export default function App() {
 
   
    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookForm
        />
        
        <h2>Contacts</h2>
        <FilterField/>
        <Contacts
        />
                  
      </>
    )
}


