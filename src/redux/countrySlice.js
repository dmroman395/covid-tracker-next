import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        name: 'Global',
        code: ''
    },
    reducers: {
        updateCountry: (state, action) => {
            return action.payload
        }
    }
})

export const { updateCountry } = countrySlice.actions

export const selectCountry = state => state.country

export default countrySlice.reducer