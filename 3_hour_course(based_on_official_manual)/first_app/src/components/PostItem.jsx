import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
        <div className="post__content">
            <strong>{props.number}.{props.post.title}</strong>
            <div>{props.post.content}</div>
        </div>
        <div className="post__btns">
            <button>Delete post</button>
        </div>

    </div>
    )
}

export default PostItem;