import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import { Page2 } from '../pages/Page2';
import { MainPage } from "../pages/MainPage";
import { TodoAppPage } from "../pages/TodoAppPage";
import { Tweets } from "../pages/Tweets";
import { PlayerPage } from "../pages/PlayerPage";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/todo" element={<TodoAppPage />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/tweet" element={<Tweets />} />
                    <Route path="/player" element={<PlayerPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};