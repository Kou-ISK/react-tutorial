import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export const Star = ({ selected = false, onSelect = () => { } }) => (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
)

export const StarRating = ({ totalStars = 5 }: { totalStars: number }) => {
    const [selectedStars, setSelectedStars] = useState(3);
    return (
        <>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
        </>
    );
}

//https://zenn.dev/cryptobox/articles/d3f952db7bc077