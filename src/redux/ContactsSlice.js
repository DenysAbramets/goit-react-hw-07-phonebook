import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56' },
    { id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12' },
    { id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79' },
    { id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26' },
  ],
};
console.log(initialState);

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    addContacts: {
      reducer: (state, action) => {
        state.contacts.push({ ...action.payload });
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
  },
});

export const { removeContact, addContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
