import { Link } from 'react-router-dom';
import { CheckBTN, ClockBTN, Level, Minutes } from '../../../../public/components/Dashboard/index';

export const DashboardMobile = () => {


    const BoxInfo = () => {
        const data = [
            { id: 1, title: 'Tareas Completadas', value: 0, logo: CheckBTN },
            { id: 2, title: 'Sesiones pomodoro', valueDone: 0, valueTotal: 0, logo: ClockBTN },
            { id: 3, title: 'Minutos enfocados', value: 0, logo: Minutes },
            { id: 4, title: 'Nivel', value: 1, ptos: 0, logo: Level }
        ]

        return (
            <section className="flex flex-col gap-4">
                {data.map((item) => (
                    <div key={item.id}
                        className="bg-[#FFFFFF] shadow-lg p-4 rounded-lg flex gap-3 
                        border border-[#F3F4F6]">
                        <div className={
                            `
                            ${item.logo === CheckBTN && 'bg-[#DBEAFE]'}
                            ${item.logo === ClockBTN && 'bg-[#DCFCE7]'}
                            ${item.logo === Minutes && 'bg-[#F3E8FF]'}
                            ${item.logo === Level && 'bg-[#FEF9C3]'}
                             p-3 rounded-full flex items-center`
                        }>
                            <img src={item.logo} alt={item.title || 'Logo'} />
                        </div>

                        <div className=''>
                            <h3 className='text-[#6B7280] text-sm '>{item.title}</h3>

                            <p className='text-[#000000]  text-xl'>{item.value}</p>

                            {item.valueDone !== undefined && item.valueTotal !== undefined && (
                                <p className='text-xl'>{item.valueDone} / {item.valueTotal}</p>
                            )}

                            {/* 
                            {item.ptos !== undefined && (
                                <p className='absolute '>{item.ptos} pts</p>
                            )} */}

                        </div>
                    </div>
                ))}
            </section>
        )
    }

    const QuickActions = [
        {
            id: 1,
            title: 'Iniciar sesión pomodoro',
            description: 'Enfócate en una tarea por 25 minutos',
            link: '/pomodoro',
            logo: ClockBTN
        },
        {
            id: 2,
            title: 'Crear nueva tarea',
            description: 'Añade una tarea a tu tablero',
            link: '/tareas',
            logo: CheckBTN
        },
        {
            id: 3,
            title: 'Ver Estadísticas',
            description: 'Analiza tu productividad',
            link: '/estadisticas',
            logo: Minutes
        },
    ]

    return (
        <section className="p-4 flex flex-col gap-6">
            <h2 className='text-[#111827] text-2xl font-bold'>Dashboard</h2>
            <BoxInfo />

            <section className='bg-[#FFFFFF] shadow-lg p-4 rounded-lg flex gap-3 border border-[#F3F4F6] flex-col'>

                <div className='flex justify-between items-center'>
                    <h2 className='text-[#111827] text-lg font-semibold'>Tareas en progreso</h2>
                    <Link to='/tareas' className='text-[#4F46E5] font-semibold text-sm'>
                        Ver todas
                    </Link>
                </div>

                <div className='flex flex-col gap-2 items-center py-5'>
                    <p className='text-[#6B7280] text-lg'>No hay tareas en progreso</p> {/*BBDD*/}
                    <Link to='/tareas' className='text-[#4F46E5]'>
                        Crear una nueva tarea
                    </Link>
                </div>
            </section>

            <section className='bg-[#FFFFFF] shadow-lg p-4 rounded-lg flex gap-3 border border-[#F3F4F6] flex-col'>
                <h2 className='text-[#111827] text-lg font-semibold'>Acciones rápidas</h2>

                {QuickActions.map((a) => (
                    <Link to={a.link} key={a.id}
                        className={`
                        ${a.logo === CheckBTN && 'bg-indigo-50'}    
                        ${a.logo === ClockBTN && 'bg-green-50'}    
                        ${a.logo === Minutes && 'bg-purple-50'}    
                        shadow-lg p-4 rounded-lg flex gap-3 
                        border border-[#F3F4F6] items-center
                        `}
                    >
                        <div className={
                            `
                            rounded-full p-3 flex items-center h-12
                            ${a.logo === CheckBTN && 'bg-[#DBEAFE]'}
                            ${a.logo === ClockBTN && 'bg-[#DCFCE7]'}
                            ${a.logo === Minutes && 'bg-[#F3E8FF]'}
                            `}
                        >
                            <img src={a.logo} alt={a.title || 'Logo'} />
                        </div>

                        <div>
                            <h3 className='text-[#111827] text-lg font-semibold'>
                                {a.title}
                            </h3>

                            <p className='text-[#6B7280] text-sm'>{a.description}</p>
                        </div>

                    </Link>
                ))}


            </section>
        </section>
    )
}