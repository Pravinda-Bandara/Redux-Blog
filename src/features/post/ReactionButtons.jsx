import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice.js";

const reactionEmoji = {
    thumbsUp: <i className="bi bi-hand-thumbs-up-fill"></i>,
    wow: <i className="bi bi-emoji-surprise-fill"></i>,
    heart: <i className="bi bi-heart-fill"></i>,
    rocket: <i className="bi bi-rocket-fill"></i>,
    coffee: <i className="bi bi-cup-hot-fill"></i>,
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
