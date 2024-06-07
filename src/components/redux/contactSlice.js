import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [];

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    },
})

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer