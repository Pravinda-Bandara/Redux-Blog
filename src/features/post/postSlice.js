import {createSlice, nanoid} from "@reduxjs/toolkit";

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
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts=(state)=>state.posts;
export const {postAdded} =postsSlice.actions
export default postsSlice.reducer