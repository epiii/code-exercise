import { createSlice } from '@reduxjs/toolkit'
import cl from '../utils/debug'

const initialState = {
    // location: {
    // name: "tugu pahlawan",
    // description: "Monumen Tugu Pahlawan, Surabaya, Indonesia ",
    // coordinate: {
    //     latitude: -7.2458404,
    //     longitude: 112.7378177,
    // },

    location: {
        name: "",
        description: "",
        coordinate: {
            latitude: 0,
            longitude: 0,
        },
    },
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location.name = action.payload.name
            state.location.description = action.payload.description
            state.location.coordinate = action.payload.coordinate
        },
    }
})

export const {
    setLocation
} = navSlice.actions

export const selectLocation = (state) => state.nav.location

export default navSlice.reducer