import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loadFilms = createAsyncThunk(
    '@@films/loadfilms',
    async (_, { dispatch }) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
        const { data } = res
        dispatch(addFilmsItem(data))
    }
)

const initialState = {
    list: []
}

const filmsSlice = createSlice({
    name: '@@films',
    initialState,
    reducers: {
        addFilmsItem: (state, action) => {
            state.list = action.payload
        }
    }
})

const { addFilmsItem } = filmsSlice.actions

export const filmsReducer = filmsSlice.reducer