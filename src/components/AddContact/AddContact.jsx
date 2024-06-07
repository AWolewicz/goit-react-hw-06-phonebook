import { useSelector } from 'react-redux';
import { getContact } from '../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { nanoid } from "nanoid";
import css from './AddContact.module.css'

export const AddContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContact); 

    const nameLabel = nanoid();
    const numberLabel = nanoid();
    
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        const name = form[0].value;
        const number = form[1].value; 
        const nameContact = contacts.some(contact => contact.name === name);
        
        if (nameContact) {
            alert(`${name} is already in contacts!`);
        } else {
            dispatch(addContact(name, number));
        };

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={css.label} htmlFor={nameLabel}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Name"
                id={nameLabel}
            />
            <label className={css.label} htmlFor={numberLabel}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Phone number"
                id={numberLabel}
            />
            <button className={css.btn}type="submit">Add</button>
        </form>
    );
};