"use client";

import React, { useState } from "react";

function PlayerCharacterInfo(props) {
    const data = props.data;
    let [scIndex, setScIndex] = useState(0);

    function handleCharacterSelect(e) {
        setScIndex(e.currentTarget.getAttribute("data-index"));
        console.log(scIndex);
    }

    return (
        <div className="w-full h-full">
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
            <div className="w-full h-fit bg-black mt-4">
                <div className="w-full p-1 flex justify-center py-4">
                    <span className="text-sm text-white">
                        {"Level " +
                            data.characters[scIndex].level +
                            " " +
                            data.characters[scIndex].name}
                    </span>
                </div>
                <div className="grid grid-cols-12 p-4 gap-2">
                    <div className="col-span-2">
                        <div className="w-full h-full p-2">
                            <ul className="space-y-2 flex flex-col items-center">
                                {data.characters[scIndex].light_cone ? (
                                    <li
                                        className={`w-full flex justify-center rounded-lg ${
                                            data.characters[scIndex].light_cone
                                                .rarity == 5
                                                ? "bg-gi-five-star/30"
                                                : "bg-gi-four-star/30"
                                        }`}
                                    >
                                        <img
                                            className="w-2/3 m-2"
                                            src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${data.characters[scIndex].light_cone.icon}`}
                                        />
                                    </li>
                                ) : null}

                                {data.characters[scIndex].relics.map(
                                    (relic, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`w-full flex justify-center rounded-lg ${
                                                    relic.rarity == 5
                                                        ? "bg-gi-five-star/30"
                                                        : "bg-gi-four-star/30"
                                                }`}
                                            >
                                                <img
                                                    className="w-2/3 m-2"
                                                    src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic.icon}`}
                                                />
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-10 flex justify-center">
                        <img
                            className="w-full"
                            src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${data.characters[scIndex].portrait}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerCharacterInfo;
