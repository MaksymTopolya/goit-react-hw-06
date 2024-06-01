import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import css from "./App.module.css"
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { LiaUserEditSolid } from 'react-icons/lia'

function App() {
 
  const [searchBoxValue, setSearchBoxValue] = useState("")
 

 const contacts = useSelector(contacts)
 const dispatch = useDispatch()


const formValues = (newContact) => {
  dispatch()
};
  

  const deleteUser = (contactId) => {
    
  }


  
  
  const filteredUsers = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchBoxValue.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={formValues} />
      <SearchBox onFilter={setSearchBoxValue} value={searchBoxValue} />
      <ContactList contacts={filteredUsers} onDeleteContact={deleteUser} />
    </div>
  )
}

export default App
