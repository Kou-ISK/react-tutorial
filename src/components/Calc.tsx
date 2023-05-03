import React, { useContext } from "react";
import { useState } from "react";

export const Calc = ({ num1, num2 }: { num1: number, num2: number }) => {
    const [answer, setAnswer] = useState(0);
    const handleClick = () => {
        setAnswer(num1 * num2);
    };
    return (
        <>
            <br />
            <button onClick={handleClick}>クリックして計算</button>
            <p>{answer}</p>
        </>
    )
}