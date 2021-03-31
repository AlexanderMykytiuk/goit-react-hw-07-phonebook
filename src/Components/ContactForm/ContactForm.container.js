import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contacts-actions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
