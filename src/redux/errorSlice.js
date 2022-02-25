import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: 'Search or click a country on the globe for local COVID news and statistics',
    reducers: {
        updateError: (state, action) => {
           return action.payload
        },
        resetError : state => {
           return ''
        }
    }
})

export const { updateError, resetError } = errorSlice.actions

export const selectError = state => state.error

export default errorSlice.reducer