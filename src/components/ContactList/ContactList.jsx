import PropTypes from 'prop-types'

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (id) => {
        onDeleteContact(id);
    };

    return (
    <ul>
        {filteredContacts.map(contact => (
        <li key={contact.id}>
                {contact.name} - {contact.number}
            <button type='button' onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
        ))}
    </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string,
    onDeleteContact: PropTypes.func,
}