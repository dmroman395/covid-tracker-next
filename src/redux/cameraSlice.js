import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
    name: 'camera',
    initialState: {
        currentPosition: [0,0,-2.75],
        targetPosition: [0,0,0],
        curveArr:[],
        counter: 0
    },
    reducers: {
        updateCurrentPosition: (state, action) => {
            state.currentPosition = action.payload
            // state.targetPosition = action.payload.targetPosition
            // state.curveArr = action.payload.curveArr
            // state.counter = action.payload.counter
        },
        updateTargetPosition: (state, action) => {
            state.targetPosition = action.payload
        },
        updateCurve: (state, action) => {
            state.curveArr = action.payload
        },
        incrementCounter: state => {
            state.counter = state.counter + 1
        },
        resetCounter: state => {
            state.counter = 0
        }
    }
})

export const { updateCurrentPosition, updateTargetPosition, updateCurve, incrementCounter, resetCounter } = cameraSlice.actions

export const selectCamera = state => state.camera

export default cameraSlice.reducer