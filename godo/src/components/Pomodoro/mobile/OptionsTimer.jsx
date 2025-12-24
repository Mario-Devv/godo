
export const OptionsTimer = ({ handleStart, running, option, startPause, reset }) => {

    const durations = [
        { id: 1, time: 15, seconds: 0, selected: true },
        { id: 2, time: 25, selected: false },
        { id: 3, time: 30, selected: false },
        { id: 4, time: 60, selected: false },
    ];

    return (
        <div className="mt-4">
            <p className="text-[#374151] text-sm">Duración (minutos)</p>

            <div className="flex gap-3 mt-2">
                {durations.map((d) => (
                    <button
                        onClick={() => handleStart(d.time)}
                        key={d.id}
                        className={` p-3 text-sm rounded-lg
                                        ${running && option === d.time * 60 ? 'bg-[#F3F4F6]' : ''}
                                        ${!running && option === d.time * 60 ? 'bg-[#4F46E5] text-white' : 'text-[#374151] bg-[#F3F4F6]'}
                                    `}
                    >
                        {d.time}
                    </button>
                ))}


            </div>

            <div className="flex gap-2 justify-center mt-4">
                <button
                    type="button"
                    className="bg-[#4F46E5] text-white p-3 rounded-xl"
                    onClick={startPause}>
                    {running ? (
                        <>
                            <p>Parar</p>
                        </>
                    ) :
                        <>
                            <p>Iniciar</p>
                        </>
                    }
                </button>

                <button
                    onClick={() => { reset() }}
                    type="button"
                    className="bg-[#4B5563] text-white p-3 rounded-xl">
                    Reiniciar
                </button>
            </div>


        </div>
    )
}
