import Filter from './Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = { contacts: [], filter: '' };

  onDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onAddContact = contactData => {
    const checkedContact = this.state.contacts.find(
      contact => contactData.name === contact.name
    );
    if (checkedContact) {
      alert(`${contactData.name} is already in contacts}`);
      return;
    } else {
      const contact = { id: nanoid(), ...contactData };
      this.setState({ contacts: [contact, ...this.state.contacts] });
    }
  };
  onFilter = filterData => {
    this.setState({ filter: filterData });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );

    return (
      <>
        <h1>
          <span>☎︎ </span>Phonebook
        </h1>
        <Form onAddContact={this.onAddContact} />
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
      </>
    );
  }
}
