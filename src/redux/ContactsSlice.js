import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  // reducers: {
  //   removeContact: (state, action) => {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  //   addContacts: {
  //     reducer: (state, action) => {
  //       state.contacts.push({ ...action.payload });
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { removeContact, addContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
