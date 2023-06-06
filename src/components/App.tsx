import React, { useState, useRef } from 'react';
import { Router } from "./../router/Router";
import './../App.css';
import { Button, Toolbar, AppBar, Typography, Box } from "@mui/material";

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
      <Navigation />
      <div id="main-content">
        <Button variant="contained" onClick={handleShow}>モーダルを表示</Button>
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
export const LikeButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <span className="likeButton" onClick={handleClick}>❤︎ {count}</span>
};

// TODOアプリ作成: https://qiita.com/tseno/items/b7133d73966c405b7249
// Material UIについて: https://mui.com/material-ui/getting-started/overview/
// モーダル作成: https://reffect.co.jp/react/react-modal
export const MyModal = ({ show, handleShow }: { show: boolean; handleShow: any }) => {
  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <p>モーダルです</p>
          <Button variant="contained" onClick={handleShow}>閉じる</Button>
        </div>
      </div >
    )
  } else return <></>
}

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="center" sx={{ flexGrow: 1 }}>
          <Box textAlign="center"><a href="/">Index</a>
            <a href="/player">Player</a>
            <a href="/todo">Todo</a>
            <a href="/page2">Page2</a>
            <a href="/tweet">Tweet</a>
            <a href="/chart">Chart</a>
          </Box>
        </Typography>
      </Toolbar >
    </AppBar>
  )
}

