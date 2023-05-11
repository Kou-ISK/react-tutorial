import React, { EventHandler, useCallback, useRef, useState } from "react"
import position from "./../position.json"
import { Player } from "../types/Player";

export const PlayerInput = (props: any) => {
    const positionNumRef = useRef<HTMLInputElement | null>(null);
    const positionRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const [positionValue, setPositionValue] = useState("");
    const positionValueAutoCompletion = () => {
        if (positionNumRef.current && Number(positionNumRef.current.value) < 16 && Number(positionNumRef.current.value) >= 1 && positionNumRef.current.value != null) {
            setPositionValue(position.positionList[Number(positionNumRef.current.value) - 1].position);
        }
    }
    const addPlayer = useCallback(() => {
        if (positionNumRef.current && positionRef.current && nameRef.current) {
            props.addPlayer({
                positionNum: positionNumRef.current.value,
                position: positionRef.current.value,
                name: nameRef.current.value
            });
        }
    }, [positionNumRef.current, , positionRef.current, nameRef.current, props.addPlayer]);
    return (
        <div id="player-input">
            <div className="input-component">
                <label htmlFor="position-number">番号</label>
                <input name="position-number" type="number" ref={positionNumRef} onChange={positionValueAutoCompletion} />
            </div>
            <div className="input-component">
                <label htmlFor="position">ポジション</label>
                <input name="position" type="text" ref={positionRef} value={positionValue} />
            </div>
            <div className="input-component">
                <label htmlFor="name">名前</label>
                <input name="name" type="text" ref={nameRef} />
            </div>
            <div><button onClick={addPlayer} className="add-player">新規プレーヤー作成</button></div>
        </div>
    )
}