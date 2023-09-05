import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';

const Form = ({ onAddContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };

    evt.currentTarget.reset();
    return onAddContact(contact);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Form;
