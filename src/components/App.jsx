import { nanoid } from 'nanoid';
import { React, Component } from 'react';
import { ContactsForm } from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert('This contact already exist');
    } else {
      this.setState(({ contacts }) => {
        return { contacts: [...contacts, newContact] };
      });
    }
  };
  deleteContact = currentId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== currentId),
    }));
  };

  filterChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    return (
      <div className={css.container}>
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={this.addContact} />
        <Filter onChange={this.filterChange} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
