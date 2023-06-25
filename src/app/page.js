"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [uid, setUid] = useState("");

    function handleUidChange(e) {
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex

        if (
            (e.target.value === "" || re.test(e.target.value)) &&
            e.target.value.length <= 9
        ) {
            setUid(e.target.value);
        }
    }

    function handleSearch() {}

    return (
        <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-4">
            <div className="min-h-screen my-auto max-w-lg mx-auto flex flex-col justify-center items-center gap-4 hsr-screen">
                <div className="flex items-center justfify-center gap-4 w-full">
                    <div className="h-10 w-full bg-black/20 border border-slate-400/70 rounded-full">
                        <input
                            type="text"
                            className="h-full w-full rounded-full bg-transparent px-4 outline-none text-slate-300 font-bold"
                            placeholder="Search UID to view player."
                            onChange={handleUidChange}
                            value={uid}
                        ></input>
                    </div>
                    <Link href={`http://localhost:3000/u/${uid}`}>
                        <button
                            className="h-10 w-fit bg-black/20 border border-slate-400/70 rounded-full text-slate-300 px-8 font-bold"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center text-xs font-bold w-full inset-x-0 bottom-0 mb-4 absolute text-slate-300">
                    <span>
                        All assets used for this application is property of
                        Mihoyo/Hoyoverse. No copyright infringement inteded.
                    </span>
                </div>
            </div>
        </main>
    );
}
