import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function FullPlayerInfo(props) {
    const data = props.data;

    return (
        <div className="w-full h-full bg-offwhite rounded-md">
            <div className="bg-rifle p-4 text-white">
                <Avatar
                    icon={data.player.avatar.icon}
                    nickname={data.player.nickname}
                    uid={data.player.uid}
                />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="w-full h-fit bg-slate-700/10 mb-4">
                    <div className="border min-h-[75px] border-slate-400 translate-x-1 translate-y-1 h-fit p-3">
                        <span>{data.player.signature}</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-4 space-y-2">
                        <Info
                            type="Trailblazer Level"
                            value={data.player.level}
                        />
                        <Info
                            type="Equilibrium Level"
                            value={data.player.world_level}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 space-y-2">
                        <Info
                            type="Achievements Unlocked"
                            value={data.player.space_info.achievement_count}
                        />
                        <Info
                            type="Characters Owned"
                            value={data.player.space_info.avatar_count}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 space-y-2">
                        <Info
                            type="Forgotten Hall"
                            value={
                                "Lv. " +
                                data.player.space_info.challenge_data
                                    .maze_group_index
                            }
                        />
                        <Info
                            type="Memory of Chaos"
                            value={
                                "Lv. " +
                                data.player.space_info.challenge_data
                                    .maze_group_id
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullPlayerInfo;
