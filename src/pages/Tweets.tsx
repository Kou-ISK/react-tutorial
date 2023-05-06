import { TweetItem } from "../components/TweetItem"
import { Timeline } from "../components/Timeline";
import React from "react";

export const Tweets = () => {
    const tweets = [
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
    ];
    return (
        <>
            <Timeline props={tweets} />
            <TweetItem icon="🌽" displayName="とうもろこし" accountName="morokoshi" content="とうもろこし食べたい" />
            <TweetItem icon="😀" displayName="にっこり" accountName="nikkori" content="ニコニコしとけ" />
        </>
    )
}

// https://sbfl.net/blog/2019/02/20/react-only-tutorial/