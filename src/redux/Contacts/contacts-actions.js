import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', function prepare(name, number) {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/Delete');
const filterContact = createAction('contacts/Filter');

export default { addContact, deleteContact, filterContact };

// было (Redax) :
// import types from './contacts-types';
// import { v4 as uuidv4 } from 'uuid';

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filterContact = value => ({
//   type: types.FILTER,
//   payload: value,
// });
// export default { addContact, deleteContact, filterContact };
