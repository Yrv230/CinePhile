import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loadBanner = createAsyncThunk(
    '@@banner/loadBanner',
    async (_, { dispatch }) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`)
        const { data } = res
        dispatch(addBannerItem(data))
    }
)

const initialState = {
    loading: true,
    list: [],
    error: null
}

const bannerSlice = createSlice({
    name: '@@banner',
    initialState,
    reducers: {
        addBannerItem: (state, action) => {
            state.list = action.payload
        }
    }
})


const { addBannerItem } = bannerSlice.actions


export const bannerReducer = bannerSlice.reducer