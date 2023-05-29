import React, { Component } from 'react';
import { ContactsContainer, Title } from './Contacts.styled';
import FilterInput from 'components/Filter/Filter';
import ContactItem from 'components/ContactItem/ContactItem';

class Contacts extends Component {
  render() {
    const {
      filter,
      handleFilterChange,
      filteredContacts,
      handleDeleteContact,
    } = this.props;

    return (
      <ContactsContainer>
        <Title>Contacts</Title>
        <FilterInput filter={filter} handleFilterChange={handleFilterChange} />
        <ContactItem
          filteredContacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </ContactsContainer>
    );
  }
}

export default Contacts;
