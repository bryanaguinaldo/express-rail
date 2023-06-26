import React from "react";

function Info(props) {
    return (
        <div className="w-full p-2 bg-dark-vanilla text-black flex justify-between">
            <span>{props.type}</span>
            <span>{props.value}</span>
        </div>
    );
}

export default Info;
