import { Tweet } from "../types/Tweet";
import { TweetItem } from "./TweetItem"
import React from "react";

export const Timeline = ({ props }: { props: Tweet[] }) => {
    const tweetList = props.map((tw: Tweet) => (
        <TweetItem
            icon={tw.icon}
            displayName={tw.displayName}
            accountName={tw.accountName}
            content={tw.content} />
    ));
    return <div className="timeline">{tweetList}</div>
}