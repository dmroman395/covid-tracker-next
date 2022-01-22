import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './darkModeSlice'
import themeReducer from './themeSlice'
import newsReducer from './newsSlice'
import statsReducer from './statsSlice'
import countryReducer from './countrySlice'

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        theme: themeReducer,
        news: newsReducer,
        stats: statsReducer,
        country: countryReducer
    }
})