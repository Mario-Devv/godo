import {useState } from "react";
import { usePomodoro } from "../../../hooks/pomodoro/usePomodoro";

export const PomodoroMobile = () => {
    const [option, setOption] = useState(15 * 60)

    const [running, setRunning] = useState(false)

    usePomodoro(running, option, setOption)


    const startPause = () => setRunning(!running)

    const reset = () => {
        setRunning(false)
        setOption(15 * 60)
    }

    const Counter = () => {
        const minutes = Math.floor(option / 60)

        const seconds = (option % 60).toString().padStart(2, '0')
        return (
            <div className="flex flex-col items-center gap-2 mt-2">
                <h3 className="text-[#4F46E5] font-bold text-4xl">
                    {minutes}:{seconds}
                </h3>
                <p className="text-[#4B5563]">Tiempo de enfoque</p>
            </div>
        )
    }

    const SelectTask = () => {
        return (
            <div>
                <select name="work" className="p-2 border border-[#D1D5DB] rounded-lg w-full mt-2">
                    <option value="default" disabled >
                        Selecciona una tarea
                    </option>
                    <option value="bbdd">Base de datos</option>
                </select>
            </div>
        )
    }

    const OptionsTimer = () => {

        const handleStart = (duration) => {
            setRunning(false);
            setOption(duration * 60);
        }

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

    return (
        <section className="p-4">
            <h2 className="text-2xl font-semibold">Zona de trabajo</h2>

            <div className="bg-[#FFFFFF] shadow-lg p-4 rounded-lg border-[#F3F4F6] border mt-4">
                <Counter />

                <div className="mt-4">
                    <p className="text-sm">Selecciona una tarea</p>
                    <form onSubmit={(e) => { e.preventDefault() }} >
                        <SelectTask />
                        <OptionsTimer />
                    </form>
                </div>
            </div>
        </section>
    )
}