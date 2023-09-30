import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { fetchContacts, addContacts, deleteContact, restoreDeletedContacts } from "./operations";

// import initialContacts from '../components/contactsList.json'

const handlePending = state => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;

};

const handleFetchContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
}
const handleAddContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex((contact) => contact.id === action.payload.id);
    state.items.splice(index, 1);
    };

const handleRestoreDeletedContatsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    // Удалить восстановленные контакты из state.deletedContacts
  state.deletedContacts = state.deletedContacts.filter((deletedContact) => {
    return !action.payload.includes(deletedContact.id);
  });

  // Добавить восстановленные контакты в state.items
  state.items = [...state.items, ...action.payload];
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
       items: [],
       deletedContacts: [],
       isLoading: false,
       error: null,
    },

   extraReducers: builder => 
   builder
   .addCase(fetchContacts.pending, handlePending)
   .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
   .addCase(fetchContacts.rejected, handleRejected)
   .addCase(addContacts.pending, handlePending)
   .addCase(addContacts.fulfilled, handleAddContactsFulfilled)
   .addCase(addContacts.rejected, handleRejected)
   .addCase(deleteContact.pending, handlePending)
   .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
   .addCase(deleteContact.rejected, handleRejected)
   .addCase(restoreDeletedContacts.pending, handlePending)
   .addCase(restoreDeletedContacts.fulfilled, handleRestoreDeletedContatsFulfilled)
   .addCase(restoreDeletedContacts.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;


