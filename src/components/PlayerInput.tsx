import React, { EventHandler, useCallback, useRef, useState } from "react"
import position from "./../position.json"
import { Player } from "../types/Player";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export const PlayerInput = ({ addPlayerToList, handleClick, show, handleShow }: { addPlayerToList: Function; handleClick: Function; show: boolean; handleShow: any }) => {
    const positionNumRef = useRef<HTMLInputElement | null>(null);
    const positionRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const [positionValue, setPositionValue] = useState("");
    const [positionNum, setPositionNum] = useState<number | null>();
    const positionValueAutoCompletion = () => {
        if (positionNumRef.current && Number(positionNumRef.current.value) < 16 && Number(positionNumRef.current.value) >= 1 && positionNumRef.current.value != null) {
            setPositionValue(position.positionList[Number(positionNumRef.current.value) - 1].label);
        }
    }
    const addPlayer = useCallback(() => {
        if (positionNum && positionValue && nameRef.current) {
            addPlayerToList({
                positionNum: positionNum,
                position: positionValue,
                name: nameRef.current.value
            });
            handleShow()
            handleClick()
        }
    }, [positionNum, , positionValue, nameRef.current, addPlayerToList]);


    if (show) {
        return (
            <div id="overlay">
                <div id="content">
                    <div id="player-input">
                        <div className="input-component">
                            <label htmlFor="position-number">番号</label>
                            <input name="position-number" type="number" onChange={positionValueAutoCompletion} value={String(positionNum)} />
                        </div>
                        <div className="input-component">
                            <label htmlFor="position">ポジション</label>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={position.positionList}
                                sx={{ width: 300 }}
                                onChange={(event, newValue) => { if (newValue) { setPositionNum(newValue.id); setPositionValue(newValue.label) } }}
                                renderInput={(params) => <TextField {...params} ref={positionRef} label="Position" name="position" />}
                            />
                        </div>
                        <div className="input-component">
                            <label htmlFor="name">名前</label>
                            <input name="name" type="text" ref={nameRef} />
                        </div>
                        <div><Button variant="contained" onClick={addPlayer} className="add-player">新規プレーヤー作成</Button></div>
                        <Button variant="contained" onClick={handleShow}>閉じる</Button>
                    </div>
                </div>
            </div>
        )
    } else return <></>
}