"use client";

import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import html2canvas from "html2canvas";

function PlayerCharacterInfo(props) {
    const data = props.data;
    let [scIndex, setScIndex] = useState(0);

    function handleCharacterSelect(e) {
        setScIndex(e.currentTarget.getAttribute("data-index"));
    }

    function handleExports() {
        const element = document.getElementById("player-card-info");
        html2canvas(element, {
            useCORS: true,
            logging: false,
        }).then((canvas) => {
            var link = document.createElement("a");
            link.download = "express-rail-card.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex justify-center gap-2 p-4 w-full">
                {data.characters.map((char, index) => {
                    return (
                        <button
                            className={`h-16 w-16 shadow-lg shadow-inner shadow-black mx-1 border border-dashed border-white/50 rounded-full overflow-hidden ${
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
            <div id="player-card-info">
                <CharacterCard character={data.characters[scIndex]} />
            </div>
            <button
                type="button"
                className="h-10 mt-4 w-fit bg-black/20 border border-slate-400/70 rounded-full text-slate-300 px-8 font-bold"
                onClick={handleExports}
            >
                Export Card
            </button>
            <p className="text-gray-500 text-xs mt-2">
                Saving is a bit weird but it works... I guess.
            </p>
        </div>
    );
}

export default PlayerCharacterInfo;
