import PropTypes from 'prop-types'

export const Filter = ({ filter, setFilter }) => {
    const handleChange = event => {
        setFilter(event.target.value);
    };

    return (<>
    <h5>Find contacts by name</h5>
    <input
    type="text"
    value={filter}
    onChange={handleChange}
    placeholder="Search contacts"
        />
    </>);
};

Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}