import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../jsonData/contactsData.json"

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: contactsData
    },
    reducers: {
        addContact: (state,action) => {
            return {
                ...state,
                items: [...state.items,action.payload]

            }
        },
        deleteContact: (state,action) => {
            return {
                ...state,
                items: state.items.filter(item=> item.id !== action.payload)
            }
        },
    }
})

export const {addContact,deleteContact} = contactsSlice.actions
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer