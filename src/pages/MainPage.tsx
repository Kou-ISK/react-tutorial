import React, { useState, useRef } from 'react';
import { HelloWorldButton } from './../components/HelloWorldButton';
import { StarRating } from '../components/StarRating';
import { Calc } from './../components/Calc';

export const MainPage = () => {
    const [num1, setNumber1] = useState(0)
    const [num2, setNumber2] = useState(0);
    return (
        <>
            <p>いいねボタンを作成しました</p>
            <p>掛け算するよ</p>
            <label htmlFor="num1">数字1</label><input type="number" id="num1" value={num1} onChange={(event) => setNumber1(event.target.valueAsNumber)} /><br />
            <label htmlFor="num2">数字2</label><input type="number" id="num2" value={num2} onChange={(event) => setNumber2(event.target.valueAsNumber)} />
            <Calc num1={num1} num2={num2} />
            <HelloWorldButton />
            <StarRating totalStars={5} />
            <ChangeColor />
            <p>--------------------------</p >
        </>
    );
}

export const ChangeColor = () => {
    const [color, setColor] = useState("white");
    const setNewColor = (color: string) => {
        setColor(color)
    }
    return (
        <>
            <input className={color} value={color} onChange={(event) => setNewColor(event.target.value)} />
            <p style={{ color: color }}>色が変わります</p >
        </>
    )
}