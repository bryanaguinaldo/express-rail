"use client";

import axios from "axios";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function User({ params }) {
    const { data, error } = useSWR(`/api/uid/${params.userId}`, fetcher);

    if (error)
        return (
            <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-4">
                <div className="min-h-screen my-auto max-w-lg mx-auto flex flex-col justify-center items-center gap-4 hsr-screen">
                    <span className="text-white">Failed to load</span>
                </div>
            </main>
        );
    if (!data)
        return (
            <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-4">
                <div className="min-h-screen my-auto max-w-lg mx-auto flex flex-col justify-center items-center gap-4 hsr-screen">
                    <span className="text-white">Loading...</span>
                </div>
            </main>
        );
    console.log(data);

    return (
        <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-6">
            <div className="min-h-screen my-auto max-w-lg mx-auto flex flex-col justify-center items-center gap-4">
                <div className="w-full h-full bg-offwhite rounded-md">
                    <div className="w-full h-fit py-4 bg-rifle flex flex-col justify-center items-center gap-2">
                        <div className="h-24 w-24 bg-police-blue rounded-full border-2 border-alabaster">
                            <img
                                className="w-full h-full rounded-full"
                                src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${data.player.avatar.icon}`}
                            ></img>
                        </div>
                        <span className="text-offwhite text-lg">
                            {data.player.nickname}
                        </span>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <div className="w-full h-fit p-4 bg-slate-600/20">
                                    <span>{data.player.signature}</span>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <p className="text-rifle mt-4">
                                    Trailblazer Level
                                </p>
                                <span>{data.player.level}</span>
                                <p className="text-rifle mt-4">
                                    Equilibrium Level
                                </p>
                                <span>{data.player.world_level}</span>
                                <p className="text-rifle mt-4">
                                    Memory of Chaos
                                </p>
                                <span>
                                    {data.player.space_info.challenge_data
                                        .maze_group_id == 0
                                        ? "Not Attempted"
                                        : "Stage " +
                                          data.player.space_info.challenge_data
                                              .maze_group_id}
                                </span>
                            </div>
                            <div className="col-span-6">
                                <p className="text-rifle mt-4">
                                    Characters Owned
                                </p>
                                <span>
                                    {data.player.space_info.avatar_count}
                                </span>
                                <p className="text-rifle mt-4">
                                    Achievements Unlocked
                                </p>
                                <span>
                                    {data.player.space_info.achievement_count}
                                </span>
                                <p className="text-rifle mt-4">User ID:</p>
                                <span>{data.player.uid}</span>
                            </div>
                        </div>
                    </div>
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

export default User;
