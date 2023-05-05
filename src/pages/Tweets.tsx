import { TweetItem } from "../components/TweetItem"
import React from "react";

export const Tweets = () => {
    return (
        <>
            <TweetItem icon="🌽" displayName="とうもろこし" accountName="morokoshi" content="とうもろこし食べたい" />
            <TweetItem icon="😀" displayName="にっこり" accountName="nikkori" content="ニコニコしとけ" />
        </>
    )
}

// https://sbfl.net/blog/2019/02/20/react-only-tutorial/