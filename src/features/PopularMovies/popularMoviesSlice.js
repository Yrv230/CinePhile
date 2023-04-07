import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const loadPopularMovies = createAsyncThunk(
    '@@popularMovies/loadPopularMovies',
    async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const { data } = res
        return data
    }
)


const initialState = {
    list: []
}

const popularMoviesSlice = createSlice({
    name: '@@popularMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPopularMovies.fulfilled, (state, action) => {
                state.list = action.payload
            })
    }
})