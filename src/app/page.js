import SearchUID from "./components/SearchUID";

export default function Home() {
    return (
        <main className="min-h-screen min-w-screen backdrop-blur-xl bg-black/50 px-4">
            <div className="min-h-screen my-auto max-w-lg mx-auto flex flex-col justify-center items-center gap-4 hsr-screen">
                <SearchUID />
                <div className="flex justify-center text-xs font-bold w-full inset-x-0 bottom-0 mb-4 absolute text-slate-300 text-center px-6">
                    <span>
                        All assets and design used for this application is
                        property of Mihoyo/Hoyoverse. No copyright infringement
                        inteded.
                    </span>
                </div>
            </div>
        </main>
    );
}
