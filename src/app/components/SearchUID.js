"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchUID() {
    const [uid, setUid] = useState("");
    const [error, setError] = useState("");

    const re = /^[0-9\b]+$/;
    const router = useRouter();

    function handleUidChange(e) {
        if (
            (e.target.value === "" || re.test(e.target.value)) &&
            e.target.value.length <= 9
        ) {
            setUid(e.target.value);
        }
    }

    function handleSearch() {
        if (re.test(uid) && uid.length == 9) {
            setError("");
            return router.push(`/u/${uid}`);
        }
        return setError("Invalid UID format");
    }

    function handleEnterKey(e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <>
            <div className="flex items-center justfify-center gap-4 w-full">
                <div className="h-10 w-full bg-black/20 border border-slate-400/70 rounded-full">
                    <input
                        type="text"
                        className="h-full w-full rounded-full bg-transparent px-4 outline-none text-slate-300 font-bold"
                        placeholder="Search UID to view player."
                        onChange={handleUidChange}
                        value={uid}
                        onKeyUp={handleEnterKey}
                    ></input>
                </div>
                <button
                    type="button"
                    className="h-10 w-fit bg-black/20 border border-slate-400/70 rounded-full text-slate-300 px-8 font-bold"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {error ? <span className="text-red-400"> {error} </span> : null}
        </>
    );
}

export default SearchUID;
