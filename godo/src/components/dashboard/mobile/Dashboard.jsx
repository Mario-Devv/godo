import { CheckBTN, ClockBTN, Level, Minutes } from '../../../../public/components/Dashboard/index';

export const DashboardMobile = () => {
    const data = [
        { id: 1, title: 'Tareas Completadas', value: 0, logo: CheckBTN },
        { id: 2, title: 'Sesiones pomodoro', valueDone: 0, valueTotal: 0, logo: ClockBTN },
        { id: 3, title: 'Minutos enfocados', value: 0, logo: Minutes },
        { id: 4, title: 'Nivel', value: 1, ptos: 0, logo: Level }
    ]

    return (
        <section className="p-4">
            <h2>Dashboard</h2>

            <section className="flex flex-col gap-4">
                {data.map((item) => (
                    <div key={item.id}
                        className="bg-[#FFFFFF] shadow-lg p-4 rounded-lg flex gap-3">
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
        </section>
    )
}