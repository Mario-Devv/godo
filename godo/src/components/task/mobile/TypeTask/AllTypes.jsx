import { tasks } from "../task"

export const Pendingtask = () => {
    return (
        <div className="mt-4 flex flex-col border border-[#E5E7EB] bg-[#F9FAFB] p-4 gap-2">
            <div className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded-full bg-[#FACC15] shadow-lg flex items-center justify-center"></span>

                <h2>
                    Pendientes
                    <span>{tasks.pending > 0 ? "(" + 0 + ")" : " (" + tasks.pending.length + ")"}
                    </span>
                </h2>
            </div>

            <div className="flex flex-col">
                {tasks.pending.length === 0 ? (
                    <p className="text-sm text-[#6B7280] justify-center items-center flex">
                        No hay tareas pendientes. ¡Añade una nueva tarea!
                    </p>
                ) : (
                    tasks.pending.map((task) => (
                        <p key={task.id}>
                            {task.name}
                        </p>
                    )))}

            </div>

        </div>
    )
}

export const InProgressTask = () => {
    return (
        <div className="mt-4 flex flex-col border border-[#E5E7EB] bg-[#F9FAFB] p-4 gap-2">
            <div className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded-full bg-[#818CF8] shadow-lg flex items-center justify-center"></span>

                <h2>
                    En Progreso
                    <span>{tasks.inProgress > 0 ? "(" + 0 + ")" : " (" + tasks.inProgress.length + ")"}
                    </span>
                </h2>
            </div>

            <div className="flex flex-col">
                {tasks.inProgress.length === 0 ? (
                    <p className="text-sm text-[#6B7280] justify-center items-center flex">
                        No hay tareas en progreso. ¡Añade una nueva tarea!
                    </p>
                ) : (
                    tasks.inProgress.map((task) => (
                        <p key={task.id}>{task.name}</p>
                    )))}

            </div>

        </div>
    )
}


export const CompletedTask = () => {
    return (
        <div className="mt-4 flex flex-col border border-[#E5E7EB] bg-[#F9FAFB] p-4 gap-2">
            <div className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded-full bg-[#4ADE80] shadow-lg flex items-center justify-center"></span>

                <h2>
                    Completadas
                    <span>{tasks.completed > 0 ? "(" + 0 + ")" : " (" + tasks.completed.length + ")"}
                    </span>
                </h2>
            </div>

            <div className="flex flex-col">
                {tasks.completed.length === 0 ? (
                    <p className="text-sm text-[#6B7280] justify-center items-center flex">
                        No hay tareas completadas. ¡Añade una nueva tarea!
                    </p>
                ) : (
                    tasks.completed.map((task) => (
                        <p key={task.id}>{task.name}</p>
                    )))}

            </div>

        </div>
    )
}