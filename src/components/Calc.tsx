import React, { useContext } from "react";
import { useState } from "react";

export const Calc = ({ num1, num2 }: { num1: number, num2: number }) => {
    const [answer, setAnswer] = useState(0);
    const handleMutliply = () => {
        setAnswer(num1 * num2);
    };
    const handleDivide = () => {
        setAnswer(num1 / num2);
    }
    const handlePlus = () => {
        setAnswer(num1 + num2);
    }
    const handleMinus = () => {
        setAnswer(num1 - num2);
    }
    return (
        <>
            <br />
            <button onClick={handleMutliply}>掛け算</button>
            <button onClick={handleDivide}>割り算</button>
            <button onClick={handlePlus}>足し算</button>
            <button onClick={handleMinus}>引き算</button>
            <p>{answer}</p>
        </>
    )
}