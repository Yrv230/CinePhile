import { configureStore } from '@reduxjs/toolkit'
import { bannerReducer } from '../features/Banner/bannerSlice'
import { filmsReducer } from '../features/Films/filmsSlice'
import { serialsReducer } from '../features/Serials/serialsSlice'

const store = configureStore({
    reducer: {
        banner: bannerReducer,
        films: filmsReducer,
        serials: serialsReducer
    },
    devTools: true
})

export default store