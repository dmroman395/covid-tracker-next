import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
    name: 'stats',
    initialState: {},
    reducers: {
        updateStats: (state, action) => {
            return action.payload
        }
    }
})

export const { updateStats } = statsSlice.actions

export const selectStats = state => state.stats

export default statsSlice.reducer