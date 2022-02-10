import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: '',
    reducers: {
        updateError: (state, action) => {
            state = `Sorry, we couldn't find ${action.payload}`
        },
        resetError : state => {
            state = ''
        }
    }
})

export const { updateError, resetError } = errorSlice.actions

export const selectError = state => state.error

export default errorSlice.reducer