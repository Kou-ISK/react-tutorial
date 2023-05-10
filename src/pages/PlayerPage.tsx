import React, { useState, useCallback } from "react";
import { PlayerList } from "../components/PlayerList";
import { Player } from "../types/Player";
import { PlayerInput } from "../components/PlayerInput";

export const PlayerPage = () => {
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
    const addPlayer = useCallback((player: Player) => setPlayerList((prev: Player[]) => [player, ...prev]), [setPlayerList]);
    return (
        <>
            <PlayerInput addPlayer={addPlayer} id="player-input" />
            <PlayerList playerList={playerList} />
        </>
    )
}