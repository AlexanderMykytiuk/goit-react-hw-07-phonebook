import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contacts-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onHandleInputSearch: e =>
    dispatch(contactsActions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
