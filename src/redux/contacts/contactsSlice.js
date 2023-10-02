import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact} from "./operations";

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


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
       items: [],
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
   
});

export const contactsReducer = contactsSlice.reducer;


