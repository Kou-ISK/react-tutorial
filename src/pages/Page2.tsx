import React, { useState } from "react";

// 参考: https://qiita.com/FumioNonaka/items/4361d1cdf34ffb5a5338
export const Page2 = () => {
    const [text, setText] = useState("ページ2デフォルト表示");
    const handleMouseOverEvent: React.PointerEventHandler<HTMLButtonElement> = (event): void => {
        setText("マウスオーバーされました");
    }
    return <button onMouseOver={handleMouseOverEvent}>{text}</button>
}