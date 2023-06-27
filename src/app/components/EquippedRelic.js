import React from "react";

function EquippedRelic(props) {
    const relic = props.data;

    return (
        <div className="grid grid-cols-12 w-full max-w-md h-14 text-xs text-white">
            <div className="col-span-2">
                <div className="w-16 h-16 flex items-center justify-center p-1 h-fit bg-black/50 rounded-lg">
                    <img
                        className="w-12 w-12"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic.icon}`}
                    />
                </div>
            </div>
            <div className="col-span-10">
                <div className="w-full h-full flex flex-col justify-center px-4">
                    <div>{relic.name + " (+" + relic.level + ")"}</div>
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
                </div>
            </div>
        </div>
    );
}

export default EquippedRelic;