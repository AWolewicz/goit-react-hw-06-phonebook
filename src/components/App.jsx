import { AddContact } from "./AddContact/AddContact.jsx";
import { ContactList } from "./ContactList/ContactList.jsx";
import { Filter } from "./Filter/Filter.jsx"
import css from './App.module.css'

export const App = () => {

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <AddContact />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};