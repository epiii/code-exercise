import { configureStore } from '@reduxjs/toolkit'
import placeReducer from './placeSlice'

export const store = configureStore({
    reducer: {
        nav: placeReducer
    }
})