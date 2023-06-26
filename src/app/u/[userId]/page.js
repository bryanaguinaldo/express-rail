"use client";

import FullPlayerInfo from "@/app/components/FullPlayerInfo";
import PlayerCharacterInfo from "@/app/components/PlayerCharacterInfo";
import NotFound from "@/app/components/NotFound";
import SearchUID from "@/app/components/SearchUID";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");

        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
};
function User({ params }) {
    const { data, error } = useSWR(`/api/uid/${params.userId}`, fetcher);

    return (
        <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-6">
            {data ? (
                <div className="pt-4 flex justify-center max-w-lg mx-auto">
                    <SearchUID />
                </div>
            ) : null}
            <div className="my-auto py-8 max-w-5xl mx-auto flex flex-col items-center gap-4">
                {error ? (
                    <NotFound />
                ) : !data ? (
                    <span className="text-white">Loading...</span>
                ) : (
                    <div className="grid grid-cols-12 w-full h-full gap-4 max-w-lg lg:max-w-full pb-24">
                        <div className="col-span-12 lg:col-span-5">
                            <FullPlayerInfo data={data} />
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <PlayerCharacterInfo data={data} />
                        </div>
                    </div>
                )}
                <div className="flex justify-center text-xs font-bold w-full bottom-0 mb-4 fixed text-slate-300 text-center px-6">
                    <span className="bg-black/50 w-fit p-2">
                        All assets and design used for this application is
                        property of Mihoyo/Hoyoverse. No copyright infringement
                        inteded.
                    </span>
                </div>
            </div>
        </main>
    );
}

export default User;
