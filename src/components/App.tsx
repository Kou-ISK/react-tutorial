import React, { useState, useRef } from 'react';
import { Router } from "./../router/Router";
import './../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Tutorial</p>
      </header>
      {/*  ルーティングする部分 */}
      <Router />
      <footer><LikeButton /></footer>
    </div>
  )
}

export default App;

// いいねボタンを作る: https://typescriptbook.jp/tutorials/react-like-button-tutorial
function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <span className="likeButton" onClick={handleClick}>❤︎ {count}</span>
};

// TODOアプリ作成: https://qiita.com/tseno/items/b7133d73966c405b7249


