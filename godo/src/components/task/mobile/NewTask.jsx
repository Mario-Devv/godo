import { useState } from "react";

export const NewTask = ({ popUp }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        status: 'pending'
    });

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("Formulario enviado:", formData);

        const storedTasks = localStorage.getItem('tasks')

        const tasks = storedTasks ? JSON.parse(storedTasks) : [];

        const newTask = {
            id: Date.now(),
            name: formData.titulo,
            description: formData.descripcion,
            status: 'pending'
        };

        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

        setFormData({
            titulo: '',
            descripcion: ''
        })
        
        popUp();
    }


    return (
        <section className="fixed left-5 top-20 w-[90dvw] h-auto max-h-[80dvh] bg-[#FFFFFF] z-30 flex 
        rounded-lg py-5 px-4 flex-col overflow-scroll
        ">
            <h2 className="text-xl font-semibold mb-2">Nueva tarea</h2>

            <form onSubmit={handleSubmit}
                className="flex flex-col">
                <div className="w-full">
                    <label htmlFor="titulo"
                        className="text-[#616161] font-semibold"
                        
                    >
                        Título
                    </label>

                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        className="border border-gray-300 rounded-md p-2 w-full mb-4"
                        value={formData.titulo}
                        onChange={handelChange}
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="descripcion"
                        className="text-[#616161] font-semibold">
                        Descripción
                    </label>

                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="overflow-scroll border border-gray-300 rounded-md p-2 w-full mb-4 field-sizing-content"
                        maxLength="200"
                        value={formData.descripcion}
                        onChange={handelChange}
                    ></textarea>
                </div>

                <div className="flex flex-row justify-end gap-4">
                    <button className="border p-2 rounded-lg bg-[#F3F4F6] text-[#616161] border-none"
                        onClick={popUp}
                        type="button">
                        Cancelar
                    </button>

                    <button className="border p-2 rounded-lg bg-[#3949AB] text-white border-none">
                        Guardar
                    </button>
                </div>
            </form>
        </section>
    )
}