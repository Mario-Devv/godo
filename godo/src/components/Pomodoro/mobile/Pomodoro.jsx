
import { usePomodoro } from "../../../hooks/pomodoro/usePomodoro";
import { Counter } from "./Counter";
import { OptionsTimer } from "./OptionsTimer";
import { SelectTask } from "./SelectTask";

export const PomodoroMobile = () => {
    const { minutes, seconds, running, startPause, handleStart, option, reset } = usePomodoro();

    return (
        <section className="p-4">
            <h2 className="text-2xl font-semibold">Zona de trabajo</h2>

            <div className="bg-[#FFFFFF] shadow-lg p-4 rounded-lg border-[#F3F4F6] border mt-4">
                <Counter minutes={minutes} seconds={seconds} />

                <div className="mt-4">
                    <p className="text-sm">Selecciona una tarea</p>
                    <form onSubmit={(e) => { e.preventDefault() }} >
                        <SelectTask />
                        <OptionsTimer handleStart={handleStart} running={running}
                            option={option} reset={reset} startPause={startPause} />
                    </form>

                </div>
            </div>
            <div className=" bg-[#FFFFFF] shadow-lg p-4 rounded-lg border-[#F3F4F6] border mt-4">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Sesiones recientes</h2>

                <div className="flex justify-between border border-[#E5E7EB] rounded-xl p-4 ">
                    <div className="">
                        <h3 className="text-md font-semibold text-[#000000] mb-1">
                            Ejemplo de sesión completada
                        </h3>
                        <p className="text-[#6B7280] text-sm">Duración 25 minutos</p>
                    </div>


                    <span className="bg-[#DCFCE7] text-[#166534] flex h-10 items-center p-2.5 rounded-2xl text-sm ">Completada</span>
                </div>
            </div>
        </section>
    )
}