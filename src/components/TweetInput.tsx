import React, { useCallback, useRef } from "react"
import { Tweet } from "../types/Tweet";
import { Button } from "@mui/material";

export const TweetInput = (props: any) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const sendTweet = useCallback(() => {
        if (textareaRef.current) {
            props.addTweet({
                id: new Date().getTime(),
                icon: "☠️",
                displayName: "海賊",
                accountName: "pirates",
                content: textareaRef.current.value
            });
            textareaRef.current.value = "";
        }
    }, [textareaRef.current, props.addTweet]);
    return (
        <div>
            <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
            <div><Button onClick={sendTweet} className="send-tweet">Tweet</Button></div>
        </div>
    )
}