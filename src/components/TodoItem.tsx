import React from "react";
import { Todo } from "../types/Todo";
import { Card, Button, CardHeader, CardContent, Typography } from "@mui/material";

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }: { todo: Todo; toggleTodoListItemStatus: any; deleteTodoListItem: any }) => {
    // onClickイベントが発生した時にuseTodoフックを呼び出す
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <Typography>{todo.content}</Typography>
                    <Button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</Button>
                    <Button onClick={handleDeleteTodoListItem}>削除</Button>
                </CardContent>
            </Card>
        </>
    );
};
