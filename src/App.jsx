
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const formValues = (newContactName) => {
    dispatch(add(newContactName));
  };

  const deleteUser = (contactId) => {
    dispatch(remove(contactId));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  const filteredUsers = contacts.filter(contact =>
    contact.info.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={formValues} />
      <SearchBox onFilter={handleFilterChange} value={filter} />
      <ContactList contacts={filteredUsers} onDeleteContact={deleteUser} />
    </div>
  );
}

export default App;
