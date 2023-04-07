import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loadSerials = createAsyncThunk(
    '@@serials/loadSerials',
    async (_, { dispatch }) => {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
        const { data } = res
        dispatch(addSerialsItem(data))
    }
)

const initialState = {
    list: []
}

const serialsSlice = createSlice({
    name: '@@serials',
    initialState,
    reducers: {
        addSerialsItem: (state, action) => {
            state.list = action.payload
        }
    }
})

const { addSerialsItem } = serialsSlice.actions

export const serialsReducer = serialsSlice.reducer