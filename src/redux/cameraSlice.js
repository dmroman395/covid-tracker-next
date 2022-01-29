import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
    name: 'camera',
    initialState: {
        position: [0,0,-2.75],
    },
    reducers: {
        updatePosition: (state, action) => {
            state.position = action.payload
        }
    }
})

export const { updatePosition } = cameraSlice.actions

export const selectCamera = state => state.camera.position

export default cameraSlice.reducer