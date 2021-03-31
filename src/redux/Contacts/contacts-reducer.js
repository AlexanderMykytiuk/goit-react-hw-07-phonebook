import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => payload !== contact.id),
});
const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});
export default combineReducers({ items, filter });

// import { combineReducers } from 'redux';
// import types from './contacts-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter(contact => payload !== contact.id);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({ items, filter });
