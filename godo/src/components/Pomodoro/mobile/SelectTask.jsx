export const SelectTask = () => {

    return (
        <div>
            <select name="work" className="p-2 border border-[#D1D5DB] rounded-lg w-full mt-2">
                <option value="default" disabled >
                    Selecciona una tarea
                </option>
                <option value="bbdd">Base de datos</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="testing">Testing</option>
            </select>
        </div>
    )
}
