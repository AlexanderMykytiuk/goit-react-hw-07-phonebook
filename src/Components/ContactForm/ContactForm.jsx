import React from 'react';

import styles from './ContactForm.module.css';
import Button from '../Button';
import { toast } from 'react-toastify';

// import { connect } from 'react-redux';
// import contactsActions from '../../redux/Contacts/contacts-actions';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const valueInput = event.currentTarget.name;
    this.setState({ [valueInput]: event.currentTarget.value.trimLeft() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;
    // с помощью expression
    let expression = /^\d+/;
    if (!name || !number || expression.test(number) === false) {
      return toast('Please fill all fields in the correct format');
    }

    // if (!name || !number) {
    //   return toast('Please fill all fields in the correct format');
    // }
    const findName = contacts.find(findContact => {
      return findContact.name === name;
    });

    if (findName) {
      toast(`${name} is already in the contacts`);
      // alert(`${name} is already in the contacts`);
      this.reset();
    } else {
      addContact(name, number);
      this.reset();
    }
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <Button text="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   addContact: (name, number) =>
//     dispatch(contactsActions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
