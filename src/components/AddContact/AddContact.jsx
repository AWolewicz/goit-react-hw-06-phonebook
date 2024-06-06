import { useState } from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";

export const AddContact = ({ contacts, setContacts }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
            if (name === 'name') {
                setName(value);
            } else if (name === 'number') {
                setNumber(value);
            }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts!`);
            return;
        }

    const newContact = {
        id: nanoid(),
        name,
        number
    };

        setContacts([...contacts, newContact]);
        setName('');
        setNumber('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        placeholder="Name"
        />
        <input
        type="tel"
        name="number"
        pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        placeholder="Phone number"
        />
        <button type="submit">Add</button>
    </form>
    );
};


AddContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    setContacts: PropTypes.func,
}