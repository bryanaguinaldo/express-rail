import React from "react";
import StatInfo from "./StatInfo";
import EquippedLightcone from "./EquippedLightcone";

function CharacterCard(props) {
    const character = props.character;
    return (
        <div className="w-full h-full character-card">
            <div className="w-full h-full grid grid-cols-12 gap-4">
                <div className="h-full col-span-12 sm:col-span-6 lg:col-span-4 overflow-hidden p-4">
                    <div className="flex justify-between relative z-10">
                        <span className="text-white p-2 bg-black/75">
                            Lv. {character.level} {character.name}
                        </span>
                    </div>
                    <img
                        className="object-cover object-center scale-[160%]"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${character.portrait}`}
                    />
                </div>
                <div className="flex flex-col justify-center h-full col-span-12 sm:col-span-6 lg:col-span-3 overflow-hidden p-4">
                    <ul className="my-auto space-y-2">
                        {character.attributes.map((stat, index) => {
                            return (
                                <li key={index}>
                                    <StatInfo
                                        icon={stat.icon}
                                        type={stat.name}
                                        value={
                                            stat.field != "spd"
                                                ? stat.field === "crit_rate" ||
                                                  stat.field === "crit_dmg"
                                                    ? (
                                                          (stat.value +
                                                              character.additions.find(
                                                                  (x) =>
                                                                      x.field ===
                                                                      stat.field
                                                              ).value) *
                                                          100
                                                      ).toFixed(2) + "%"
                                                    : Math.trunc(
                                                          stat.value +
                                                              character.additions.find(
                                                                  (x) =>
                                                                      x.field ===
                                                                      stat.field
                                                              ).value
                                                      )
                                                : stat.value
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex flex-col justify-center h-full col-span-12 lg:col-span-5 overflow-hidden p-4 space-y-2">
                    <EquippedLightcone light_cone={character.light_cone} />
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
