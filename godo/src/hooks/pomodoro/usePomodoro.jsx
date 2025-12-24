import { useEffect, useState } from "react";

export function usePomodoro() {
    const [option, setOption] = useState(15 * 60)

    const [running, setRunning] = useState(false)

    const startPause = () => setRunning(!running)

    useEffect(() => {
        let timer;
        if (running) {
            if (running && option > 0) {
                timer = setInterval(() => {
                    setOption((prev) => prev - 1)
                }, 1000)
            }
        }

        return () => clearInterval(timer)
    }, [running, option])


    const reset = () => {
        setRunning(false)
        setOption(15 * 60)
    }

    const minutes = Math.floor(option / 60)
    const seconds = (option % 60).toString().padStart(2, '0')

    const handleStart = (duration) => {
        setRunning(false);
        setOption(duration * 60);
    }

    return { startPause, reset, minutes, seconds, handleStart, option, running}
}