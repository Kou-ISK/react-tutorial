import React, { useState, useCallback } from "react";
import { PlayerList } from "../components/PlayerList";
import { Player } from "../types/Player";
import { PlayerInput } from "../components/PlayerInput";

export const PlayerPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const [playerList, setPlayerList] = useState([
        {
            positionNum: 2,
            position: "HO",
            name: "田中"
        },
        {
            positionNum: 9,
            position: "SH",
            name: "山田"
        }
    ]);

    // TODO 
    // 新規プレーヤー追加用コンポーネント作成
    // ドラッグ&ドロップで並び替えられるようにする
    // positionNumに応じて配置を変えられるようにする
    const addPlayer: Function = useCallback((player: Player) => setPlayerList((prev: Player[]) => [player, ...prev]), [setPlayerList]);
    return (
        <>
            <button onClick={handleShow}>選手を追加</button>
            <PlayerInput addPlayerToList={addPlayer} show={show} handleShow={handleShow} />
            <PlayerList playerList={playerList} />
        </>
    )
}