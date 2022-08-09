import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: {
        name: "",
        description: "",
        coordinate: {
            latitude: 0,
            longitude: 0,
        },
    },
}

export const fetchPlace = createAsyncThunk(
    'place/fetchPlaceStatus',
    async (term: string, thunkAPI) => {
        const res = await placeAPI.fet
    }
)

export const placeSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        // setLocation: (state, action:PayloadAction<number>) => {
        setLocation: (state, action) => {
            state.location.name = action.payload.name
            state.location.description = action.payload.description
            state.location.coordinate = action.payload.coordinate
        },
    }
})

export const {
    setLocation
} = placeSlice.actions

export const selectLocation = (state) => state.nav.location

export default placeSlice.reducer