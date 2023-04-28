import React from "react";
import { useState } from "react";

export const HelloWorldButton = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    };
    return (
        <>
            <button onClick={handleClick}>Hello</button>
            <p>{state ? "HELLO" : "BYE"}</p>
        </>
    )
};