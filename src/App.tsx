import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

// いいねボタンを作る: https://typescriptbook.jp/tutorials/react-like-button-tutorial
function LikeButton() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <span className="likeButton" onClick={handleClick}>❤︎ {count}</span>
}

export default App;
