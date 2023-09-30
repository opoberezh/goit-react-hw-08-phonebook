import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://650c6f5a47af3fd22f679ec5.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, thunkAPI) => {
    try{
        const response = await axios.get('/contacts');
     
        return response.data;
    }catch (error){
       return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const addContacts = createAsyncThunk(
'contacts/addContacts',
async (contact, thunkAPI) => {
    try{
        const response = await axios.post('/contacts', contact);
        return response.data;
    }catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkAPI) => {
        try{
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const restoreDeletedContacts = createAsyncThunk(
    'contacts/restoreDeletedContacts',
  
    async (contactsToRestore, thunkAPI) => {
      try {
        const response = await axios.put(`/contacts/restore`, { contacts: contactsToRestore  });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      } 
       
    } 
   
  );

  
  
  
  
  
  