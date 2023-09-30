import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
})

export default store;