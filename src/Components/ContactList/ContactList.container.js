import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contacts-actions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedContact = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );
};
const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
