import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import { Page2 } from '../pages/Page2';
import { MainPage } from "../pages/MainPage";
import { TodoAppPage } from "../pages/TodoAppPage";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/todo" element={<TodoAppPage />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};