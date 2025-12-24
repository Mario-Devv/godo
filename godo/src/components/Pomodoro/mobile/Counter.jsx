

export const Counter = ({minutes, seconds}) => {
    

    return (
        <div className="flex flex-col items-center gap-2 mt-2">
            <h3 className="text-[#4F46E5] font-bold text-4xl">
                {minutes}:{seconds}
            </h3>
            <p className="text-[#4B5563]">Tiempo de enfoque</p>
        </div>
    )
}