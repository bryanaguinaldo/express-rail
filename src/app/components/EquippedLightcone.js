import React from "react";

function EquippedLightcone(props) {
    const light_cone = props.light_cone;

    return (
        <div className="w-full flex justify-center items-center space-x-4 bg-black/50 p-2">
            {light_cone ? (
                <>
                    <img
                        className="h-10"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${light_cone.icon}`}
                    />
                    <div className="text-white text-xs">
                        <div>
                            <span>{light_cone.name}</span>
                        </div>
                        <p>Level {light_cone.level}</p>
                    </div>
                </>
            ) : (
                <span className="text-white text-sm">
                    No light cone equipped.
                </span>
            )}
        </div>
    );
}

export default EquippedLightcone;
