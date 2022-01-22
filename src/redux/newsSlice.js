import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'newsData',
    initialState: {},
    reducers: {
        updateNews: (state, action) => {
            return action.payload
        }
    }
})

export const { updateNews } = newsSlice.actions

export const selectNews = state => state.newsData

export default newsSlice.reducer