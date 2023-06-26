import { useRouter } from "next/navigation";
import React from "react";

function NotFound() {
    const router = useRouter();
    return (
        <div className="w-full max-w-lg h-fit p-6 bg-alabaster flex flex-col gap-4">
            <span className="text-red-500">Uh oh... Player not found!</span>
            <span className="text-justify">
                The user you have tried to search does not exist. If you are
                sure that the UID is correct, please try again a little bit
                later.
            </span>
            <button
                className="h-10 w-fit border border-black rounded-full px-8 font-bold hover:bg-black/10 transition-all"
                onClick={() => router.push("/")}
            >
                Go back
            </button>
        </div>
    );
}

export default NotFound;
