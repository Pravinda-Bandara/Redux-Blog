import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PostsExcerpt } from "./PostsExcerpt.jsx";
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from "./postSlice.js";

export function PostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => <PostsExcerpt post={post} />);
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section className="post-list">
            <h2>Posts</h2>
            {content}
        </section>
    );
}
