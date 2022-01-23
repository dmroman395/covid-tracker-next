import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState: {},
    reducers: {
        updateNews: (state, action) => {
            return action.payload
        }
    }
})

export const { updateNews } = newsSlice.actions

export const selectNews = state => state.news

export default newsSlice.reducer