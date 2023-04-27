import React, { useState, useRef } from 'react';

import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";
import './../App.css';

function App() {
  //カスタムフックから必要な変数を取得
  const { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem } = useTodo();
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current!.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";
  };

  // 未完了リスト
  const incompletedList = todoList.filter((todo: Todo) => !todo.done);

  // 完了リスト
  const completedList = todoList.filter((todo: Todo) => todo.done);

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
        <p>--------------------------</p>
        <>
          <TodoTitle title="TODO進捗管理" as="h1" />
          <TodoAdd buttonText="+ TODOを追加" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
          <TodoList todoList={incompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="未完了TODOリスト" as="h2" />
          <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="完了TODOリスト" as="h2" />
        </>
      </body>
      <footer><LikeButton /></footer>
    </div>
  );
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


