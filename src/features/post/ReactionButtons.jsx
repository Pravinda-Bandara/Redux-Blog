import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice.js";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

export function ReactionButtons({ post }) {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <>
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
            <span> </span>
        </>
    ));

    return <div>{reactionButtons}</div>;
}
