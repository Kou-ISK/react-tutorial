import React from "react"
import { Player } from "../types/Player"

export const PlayerItem = (player: Player) => {
    return (
        <>
            <div className={player.position}>
                <div className="player">
                    <h1 className="player-name">{player.name}</h1>
                    <div className="player-info">
                        <p className="position-num">{player.positionNum}</p>
                        <p className="position-name">{player.position}</p>
                    </div>
                </div>
            </div>
        </>
    )
}