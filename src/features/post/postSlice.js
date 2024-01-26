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
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts=(state)=>state.posts;
export const {postAdded} =postsSlice.actions
export default postsSlice.reducer