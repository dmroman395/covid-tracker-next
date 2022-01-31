import { createSlice } from "@reduxjs/toolkit";

export const rotationSlice = createSlice({
    name: 'rotation',
    initialState: {
        status: true
    },
    reducers: {
        enableRotation: state => {
            state.status = true
        },
        disableRotation: state => {
            state.status = false
        },
        toggleRotation: state => {
            state.status = !state.status
        }
    }
})

export const { enableRotation, disableRotation, toggleRotation } = rotationSlice.actions

export const selectRotation = state => state.rotation.status

export default rotationSlice.reducer