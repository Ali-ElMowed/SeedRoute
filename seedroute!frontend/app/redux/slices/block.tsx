import { createSlice } from '@reduxjs/toolkit'

export const blockSlice = createSlice({
    name: 'block',
    initialState: {},
    reducers: {
        set: (state, action) => action.payload
    },
})

export const { set } = blockSlice.actions
export default blockSlice.reducer

