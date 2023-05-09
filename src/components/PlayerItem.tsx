import React from "react"
import { Player } from "../types/Player"

export const PlayerItem = (player: Player) => {
    return (
        <>
            <div className="player">
                <h1 className="player-name">{player.name}</h1>
                <div className="player-info">
                    <h2 className="position-num">{player.positionNum}</h2>
                    <h2 className="position-name">{player.position}</h2>
                </div>
            </div>
        </>
    )
}