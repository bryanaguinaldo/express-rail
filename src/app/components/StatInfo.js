import React from "react";

function Info(props) {
    return (
        <div className="w-full text-sm p-2 bg-black/40 text-white flex justify-between items-center">
            <div className="flex gap-2 items-center">
                {props.icon ? (
                    <img
                        className="h-6"
                        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.icon}`}
                    />
                ) : null}
                <span>{props.type}</span>
            </div>
            <span>{props.value}</span>
        </div>
    );
}

export default Info;
