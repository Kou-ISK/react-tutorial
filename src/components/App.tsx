import React, { useState, useRef } from 'react';
import { Router } from "./../router/Router";
import './../App.css';

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>React Tutorial</p>
      </header>
      <div id="main-content">
        <button onClick={handleShow}>モーダルを表示</button>
        <MyModal show={show} handleShow={handleShow} />
        {/*  ルーティングする部分 */}
        <Router />
      </div>
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

export const MyModal = ({ show, handleShow }: { show: boolean; handleShow: any }) => {
  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <p>モーダルです</p>
          <button onClick={handleShow}>閉じる</button>
        </div>
      </div >
    )
  } else return <></>
}

