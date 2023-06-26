import React from "react";

function Avatar(props) {
    return (
        <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-tan rounded-full border-2 border-police-blue flex items-center gap-4">
                <img
                    className="w-full h-full rounded-full"
                    src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.icon}`}
                ></img>
            </div>
            <div className="flex flex-col">
                <span className="text-lg">{props.nickname}</span>
                <span className="text-sm">{"UID: " + props.uid}</span>
            </div>
        </div>
    );
}

export default Avatar;
