import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: '',
    reducers: {
        updateError: (state, action) => {
           return `Sorry, we couldn't find "${action.payload}"`
        },
        resetError : state => {
           return ''
        }
    }
})

export const { updateError, resetError } = errorSlice.actions

export const selectError = state => state.error

export default errorSlice.reducer