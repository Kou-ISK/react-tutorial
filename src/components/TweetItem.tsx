import { Tweet } from "../types/Tweet"
import { LikeButton } from "./App";
import React from "react";

export const TweetItem = (props: Tweet) => {
    return (
        <div className="tweet">
            <div className="icon-container">{props.icon}</div>
            <div className="body-container">
                <div className="status-display">
                    <span className="display-name">{props.displayName}</span>
                    <span className="account-name">@{props.accountName}</span>
                </div>
                <div className="content">{props.content}</div>
                <LikeButton />
            </div>
        </div>
    )
}