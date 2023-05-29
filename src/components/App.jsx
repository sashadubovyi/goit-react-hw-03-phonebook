import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { Base } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const CONTACTS_KEY = 'contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const parse = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    if (parse && parse.length > 0) {
      this.setState({
        contacts: parse,
      });
    } else {
      this.setState({
        contacts: [],
      });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
  }
  // ==

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    const existingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      Notify.failure('This contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = userId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== userId;
        }),
      };
    });
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Base>
        <PhoneBook handleAddContact={this.handleAddContact} />
        <Contacts
          filter={filter}
          handleFilterChange={this.handleFilterChange}
          filteredContacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </Base>
    );
  }
}

export default App;
