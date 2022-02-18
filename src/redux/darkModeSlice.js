import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name:'darkMode',
    initialState:{
        value: false
    },
    reducers: {
        toggle: state => {
            state.value = !state.value
        },
        setDark: state => {
            state.value = true
        }
    }
})

export const { toggle, setDark } = darkModeSlice.actions

export const selectDarkMode = state => state.darkMode.value

export default darkModeSlice.reducer