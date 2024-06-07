
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import { getContact, getFilter } from '../redux/selectors';
import { useSelector } from 'react-redux';

const filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};
    
export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContact);
    const filter = useSelector(getFilter);

    const filteredContacts = filterContacts(contacts, filter)

    const handleDelete = () => dispatch(deleteContact(contacts.id))

    return (
    <ul>
        {filteredContacts.map(contact => (
        <li key={contact.id}>
                {contact.name} - {contact.number}
            <button type='button' onClick={() => handleDelete()}>Delete</button>
        </li>
        ))}
    </ul>
    );
};