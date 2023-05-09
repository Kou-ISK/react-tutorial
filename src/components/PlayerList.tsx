import React from "react"
import { Player } from "../types/Player"
import { PlayerItem } from "./PlayerItem"

export const PlayerList = ({ playerList }: { playerList: Player[] }) => {
    const playerListComponent = playerList.map((player: Player) => (
        <PlayerItem name={player.name} positionNum={player.positionNum} position={player.position} />
    ))
    return <div className="player-list">{playerListComponent}</div>
}