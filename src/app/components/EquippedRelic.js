import React from "react";

function EquippedRelic(props) {
    const relic = props.data;

    return (
        <div className="grid grid-cols-12 w-full max-w-md h-14 text-xs text-white mt-2">
            <div className="col-span-2">
                <div className="w-16 h-16 flex items-center justify-center p-1 h-fit bg-black/50 rounded-lg">
                    <img
                        className="w-12 w-12"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic.icon}`}
                    />
                </div>
            </div>
            <div className="col-span-10 w-full">
                <div className="w-full h-full flex flex-col justify-center px-4">
                    <div>
                        <span className="text-base">
                            {relic.main_affix.name +
                                "+" +
                                (relic.main_affix.percent
                                    ? (relic.main_affix.value * 100).toFixed(
                                          1
                                      ) + "%"
                                    : Math.trunc(relic.main_affix.value))}
                        </span>
                    </div>
                    <div className="w-full h-full">
                        <span className="text-xs">
                            {relic.sub_affix.map((substat, index) => {
                                return (
                                    <ul key={index}>
                                        <li className="text-xs">
                                            {substat.name +
                                                "+" +
                                                (substat.percent
                                                    ? (
                                                          substat.value * 100
                                                      ).toFixed(1) + "%"
                                                    : Math.trunc(
                                                          substat.value
                                                      ))}
                                        </li>
                                    </ul>
                                );
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EquippedRelic;
