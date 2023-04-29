import React from "react";
import { useState } from "react";

export const Calc = ({ num1, num2 }: { num1: number, num2: number }) => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    };
    const answer = num1 * num2
    if (state) {
        return (
            <>
                <p>{answer}</p>
            </>
        )
    } else return <></>
}