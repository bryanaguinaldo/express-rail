import React from "react";
import StatInfo from "./StatInfo";
import EquippedLightcone from "./EquippedLightcone";
import EquippedRelic from "./EquippedRelic";

function CharacterCard(props) {
    const character = props.character;
    return (
        <div
            className="w-full h-full character-card min-h-[360px]"
            id="character-card"
        >
            <div className="w-full h-full grid grid-cols-12">
                <div className="h-full col-span-12 sm:col-span-6 xl:col-span-3 overflow-hidden p-4 flex flex-col">
                    <div className="flex flex-col justify-between relative z-10">
                        <span className="text-white p-2 bg-black/75 w-fit absolute">
                            Lv. {character.level} {character.name}
                        </span>
                    </div>
                    <div className="w-full flex relative z-10">
                        <ul className="w-full flex flex-col absolute py-[20%] items-end">
                            {character.rank_icons.map((eidolon, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`border rounded-full ${
                                            character.rank >= index + 1
                                                ? "border-white bg-white/50"
                                                : "border-gray-500 bg-gray-500/70 opacity-75"
                                        }`}
                                    >
                                        <img
                                            className="w-8 h-8 rounded-full border-white from-current to-transparent"
                                            src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${eidolon}`}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <img
                        className="object-cover object-center scale-[180%]"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${character.portrait}`}
                    />
                </div>
                <div className="flex flex-col justify-center h-full col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 overflow-hidden p-4">
                    <ul className="my-auto space-y-2">
                        <EquippedLightcone light_cone={character.light_cone} />
                        {character.attributes.map((stat, index) => {
                            let stat_ =
                                stat.value +
                                (character.additions.find(
                                    (x) => x.field === stat.field
                                ) == undefined
                                    ? 0
                                    : character.additions.find(
                                          (x) => x.field === stat.field
                                      ).value);
                            return (
                                <li key={index}>
                                    <StatInfo
                                        icon={stat.icon}
                                        type={stat.name}
                                        value={
                                            stat.percent
                                                ? (stat_ * 100).toFixed(2) + "%"
                                                : Math.trunc(stat_)
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex justify-center h-full w-full col-span-12 lg:col-span-12 xl:col-span-6 py-4 space-y-2">
                    <div className="grid grid-cols-12 mb-4 ml-4 ">
                        {character.relics.map((relic, index) => {
                            return (
                                <div
                                    className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6 mt-4 mb-4"
                                    key={index}
                                >
                                    <EquippedRelic data={relic} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
