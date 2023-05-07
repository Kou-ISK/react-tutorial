import { TweetItem } from "../components/TweetItem"
import { Timeline } from "../components/Timeline";
import React, { useCallback, useState } from "react";
import { Tweet } from "../types/Tweet";
import { TweetInput } from "../components/TweetInput";

export const Tweets = () => {
    const [tweets, setTweets] = useState([
        {
            id: 0,
            icon: '🌽',
            displayName: 'もろこし太郎',
            accountName: 'morokoshi',
            content: '今日も1日もろこしがうまい'
        },
        {
            id: 1,
            icon: '🦐',
            displayName: 'エビデンス',
            accountName: 'evidence',
            content: 'かにみそたべたい'
        }
    ]);

    // addTweet関数はuseCallbackで作成する
    // これも毎回作成していると重くなるので
    const addTweet = useCallback((tweet: Tweet) => setTweets((prev: Tweet[]) => [tweet, ...prev]), [setTweets]);
    return (
        <>
            <TweetInput addTweet={addTweet} />
            <Timeline tweets={tweets} />
        </>
    )
}

// https://sbfl.net/blog/2019/02/20/react-only-tutorial/