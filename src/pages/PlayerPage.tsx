import React, { useState, useCallback } from "react";
import { PlayerList } from "../components/PlayerList";
import { Player } from "../types/Player";
import { PlayerInput } from "../components/PlayerInput";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

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

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleShow}>選手を追加</Button>
            <PlayerInput addPlayerToList={addPlayer} handleClick={handleClick} show={show} handleShow={handleShow} />
            <PlayerList playerList={playerList} />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    選手が追加されました
                </Alert>
            </Snackbar>
        </>
    )
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});