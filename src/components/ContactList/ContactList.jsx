import PropTypes from 'prop-types';
import { StyledContacts } from './ContactList.styled';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => {
        return (
          <Contact
            contactItemData={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </StyledContacts>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
