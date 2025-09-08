import { useEffect } from "react";

export function usePomodoro(running, option, setOption) {
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
    }, [running, option, running])
}