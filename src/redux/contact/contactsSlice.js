import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [{ id: 'id-007', name: 'David Beckham', number: '777-777-2323' }],
  filter: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action ) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
