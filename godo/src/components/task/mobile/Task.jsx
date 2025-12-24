import { useState } from "react"
import { Pendingtask, InProgressTask, CompletedTask } from "./TypeTask/AllTypes";
import { Plus } from "../../../../public/components/task"
import { NewTask } from "./NewTask";

export const TaskMobile = () => {
    const [isLista, setLista] = useState('kanban')
    const [showNewTask, setShowNewTask] = useState(false);

    return (
        // Zone for Mobile Tasks
        <section className="flex flex-col gap-2 p-4">
            <h2 className="text-[#111827] font-bold text-3xl text-center">
                Tablón de tareas
            </h2>

            <div className="flex justify-center gap-2 mt-3">
                <div className="flex">
                    {/* Buttons for change view and add tasks*/}
                    <button
                        onClick={() => setLista('kanban')}
                        className={`${isLista === 'kanban' && 'bg-[#4F46E5] text-[#FFFFFF]  '}
                        p-2 px-6 rounded-l-xl
                        `}>
                        Kanban
                    </button>

                    <button
                        onClick={() => (setLista('lista'))}
                        className={`${isLista === 'lista' && 'bg-[#4F46E5] text-[#FFFFFF] '}
                        p-2 px-6 rounded-r-xl`}
                    >
                        Lista
                    </button>
                </div>

                <button className="bg-[#4F46E5] py-2 px-4
                pl-3 text-[#FFFFFF] flex justify-between gap-2 rounded-xl"
                    onClick={() => setShowNewTask(true)}
                >
                    <img src={Plus} alt="Icono plus" />
                    <p>Nueva Tarea</p>
                </button>

                {/* New Task Modal */}
                <div className={`${showNewTask ?
                    `fixed w-dvw h-dvh top-0 bg-[#000000]/50
                     z-40 
                     transition-all
                     duration-1000
                     ease-in-out
                    ` : ''}`}>

                    <div className={`
                    fixed inset-0 z-30
                    flex items-center justify-center
                    transition-ease-in-out
                    duration-500
                    translate-x-0
                    ${showNewTask ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <NewTask popUp={() => setShowNewTask(false)} />
                    </div>
                </div>


            </div>

            {/* Call components for show status tasks */}
            {/* Pending Tasks */}
            <Pendingtask />

            {/* In Progress Tasks */}
            <InProgressTask />

            {/* Completed Tasks */}
            <CompletedTask />
        </section >
    )
}