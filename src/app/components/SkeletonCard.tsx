import clsx from "clsx";

export default function SkeletonCard({isLoading}:{isLoading?:boolean}){
    return(
        <div className={clsx(
            "flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300",
            {
                "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimer_1.5s_infinit]":
                 isLoading
            }
        )}
        >
            <div className="bg-zinc-700 relative max-h-72 flex-1">.</div>
            <div className="bg-zinc-700 flex justify-between font-bold my-3">.</div>
            <div className="bg-zinc-700 w-8/12 rounded-lg">.</div>
        </div>
    )
}