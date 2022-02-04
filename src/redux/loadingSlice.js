import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        status: false
    },
    reducers: {
        setLoadingTrue: state => {
            state.status = true
        },
        setLoadingFalse: state => {
            state.status = false
        }
    }
})

export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions

export const selectLoading = state => state.loading.status

export default loadingSlice.reducer