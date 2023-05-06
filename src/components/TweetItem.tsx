import { Tweet } from "../types/Tweet"
import { LikeButton } from "./App";
import React from "react";

export const TweetItem = (props: Tweet) => {
    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);
    return (
        <div className="tweet">
            <div className="icon-container">{props.icon}</div>
            <div className="body-container">
                <div className="status-display">
                    <span className="display-name">{props.displayName}</span>
                    <span className="account-name">@{props.accountName}</span>
                </div>
                <div className="content">{props.content}</div>
                <span onClick={toggleLike}>{liked ? "❤️" : "♡"}</span>
            </div>
        </div>
    )
}