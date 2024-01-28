import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'pravinda bandara' },
    { id: '1', name: 'kasun kalhara' },
    { id: '2', name: 'gimhan sampath' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer