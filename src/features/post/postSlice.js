import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'hello',
        content: "hello ,how are u?",

    },
    {
        id: '2',
        title: 'good',
        content: "im good,how about u?",

    }
    ]

const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{}
})

export const selectAllPosts=(state)=>state.posts;
export default postsSlice.reducer