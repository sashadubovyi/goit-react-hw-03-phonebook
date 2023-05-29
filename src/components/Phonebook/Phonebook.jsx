import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookContainer,
  Title,
  FormContacts,
  InputName,
  ButtonSubmit,
} from './Phonebook.styled';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.handleAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <PhoneBookContainer>
        <Title>Phonebook</Title>
        <FormContacts onSubmit={this.handleSubmit}>
          <InputName
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter your full name"
            required
          />
          <InputName
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter your number"
            required
          />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormContacts>
      </PhoneBookContainer>
    );
  }
}

PhoneBook.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default PhoneBook;
