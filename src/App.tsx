import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num1, setNumber1] = useState(0)
  const [num2, setNumber2] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        React Tutorial
      </header>
      <body>
        <p>いいねボタンを作成しました</p>
        <p>掛け算するよ</p>
        <label htmlFor="num1">数字1</label><input type="number" id="num1" value={num1} onChange={(event) => setNumber1(event.target.valueAsNumber)} /><br />
        <label htmlFor="num2">数字2</label><input type="number" id="num2" value={num2} onChange={(event) => setNumber2(event.target.valueAsNumber)} />
        <p>答えは{num1 * num2}です</p>
      </body>
      <footer><LikeButton /></footer>
    </div>
  );
}

// いいねボタンを作る: https://typescriptbook.jp/tutorials/react-like-button-tutorial
function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <span className="likeButton" onClick={handleClick}>❤︎ {count}</span>
};

export default App;
