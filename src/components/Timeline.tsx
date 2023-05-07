import { Tweet } from "../types/Tweet";
import { TweetItem } from "./TweetItem"
import React from "react";

export const Timeline = ({ tweets }: { tweets: Tweet[] }) => {
    const tweetList = tweets.map((tw: Tweet) => (
        <TweetItem
            id={tw.id}
            icon={tw.icon}
            displayName={tw.displayName}
            accountName={tw.accountName}
            content={tw.content} />
    ));
    return <div className="timeline">{tweetList}</div>
}