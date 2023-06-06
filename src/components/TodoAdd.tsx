import React, { RefObject } from "react";
import { Button } from "@mui/material"

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }: { buttonText: string; inputEl: RefObject<HTMLTextAreaElement>; handleAddTodoListItem: () => void }) => {
    return (
        <>
            <textarea ref={inputEl} />
            <Button onClick={handleAddTodoListItem}>{buttonText}</Button>
        </>
    );
};