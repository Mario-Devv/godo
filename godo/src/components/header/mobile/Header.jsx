import { useState } from "react";
import { Burger, Calendar, Clock, House, Stats } from "../../../../public/components/header"
import { Link, useLocation } from "react-router-dom";




export const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation()
    const MenuItems = [
        { name: 'Dashboard', icon: House, path: '/dashboard' },
        { name: 'Pomodoro', icon: Clock, path: '/pomodoro' },
        { name: 'Tareas', icon: Calendar, path: '/tareas' },
        { name: 'Estadísticas', icon: Stats, path: '/estadisticas' },
    ]

    const HandleOpen = () => {
        setIsOpen(!isOpen);
    }

    

    return (
        <>
            <div className="flex items-center gap-2">
                <button onClick={HandleOpen}>
                    <img src={Burger} alt="" />
                </button>
                <h1 className='font-bold text-2xl text-[#111827]'>
                    GoDo
                </h1>
            </div>

            <div className='ml-2 flex gap-4 items-center '>
                <div className=' flex px-5 py-2 bg-[#E0E7FF] text-[#3730A3] rounded-full text-sm gap-3 items-center'>
                    <p className="text-sm font-bold">
                        Nivel 1
                    </p>
                    <div className="w-20 bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-indigo-600 h-2.5 rounded-full w-[45%]"></div>
                    </div>

                    <p>
                        0 pts
                    </p>
                </div>
            </div>

            <aside className={` text-white fixed w-1/2 h-full top-0 left-0 bg-[#3730A3] shadow-lg  transition-transform duration-300 ease-in
            ${isOpen ? 'translate-x-0' : ' -translate-x-full'}`}>
                <div className="flex flex-col gap-8">
                    <section className="flex flex-col gap-1 p-4">
                        <h2 className="text-2xl font-bold">Go Do</h2>
                        <p className="text-[#C7D2FE] text-sm">Vence la procastinación</p>
                    </section>

                    <nav className="">
                        <ul>
                            {MenuItems.map((item) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <Link to={item.path}
                                        key={item.name}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex gap-2 px-4 py-4 transition-all duration-100
                                    ${isActive ? ' bg-[#312E81] border-r-4' : 'text-white'}
                                    `

                                        }>
                                        <img src={item.icon} alt={item.icon} />
                                        <p>{item.name}</p>
                                    </Link>
                                )
                            })
                            }
                        </ul>
                    </nav>

                </div>

            </aside>

        </>
    )
}