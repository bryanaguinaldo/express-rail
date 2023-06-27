"use client";

import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

function PlayerCharacterInfo(props) {
    const data = props.data;
    let [scIndex, setScIndex] = useState(0);

    function handleCharacterSelect(e) {
        setScIndex(e.currentTarget.getAttribute("data-index"));
        console.log(scIndex);
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex justify-center gap-2 p-4 w-full">
                {data.characters.map((char, index) => {
                    return (
                        <button
                            className={`h-12 w-20 rounded-lg ${
                                char.rarity == 5
                                    ? "bg-gi-five-star"
                                    : "bg-gi-four-star"
                            } cursor-pointer flex justify-end shadow-md`}
                            key={char.id}
                            data-id={char.id}
                            data-index={index}
                            onClick={handleCharacterSelect}
                        >
                            <img
                                className="h-full rounded-lg"
                                src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${char.icon}`}
                            />
                        </button>
                    );
                })}
            </div>
            <CharacterCard character={data.characters[scIndex]} />
        </div>
    );
}

export default PlayerCharacterInfo;
