import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {

    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);
    
 const filteredUsers = contacts.filter(contact =>
    contact.info.name.toLowerCase().includes(filter.toLowerCase())
  );



    return (
        <ul className={css.list}>
            {filteredUsers.map((user) => (
                <li key={user.id} className={css.item}>
                    <Contact data={user}/>
                </li>
            ))}
        </ul>
    );
}
