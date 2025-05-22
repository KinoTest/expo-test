import Task from "@/app/models/Task";
import { createContext, PropsWithChildren, useState } from "react";
import globalStateObject from "./globalStateObject";

const globalContext = createContext({} as globalStateObject)

export default function GlobalContextHook ( props: PropsWithChildren & { state?: globalStateObject }) {

    const [ initialized, setInitialized ] = useState(false)
    const [ tasks, setTasks ] = useState([] as Task[])

    const globalState: globalStateObject = {
        globalStates: {
            initialized,
            tasks,
        },
        globalDispatchers: {
            setInitialized,
            setTasks,
            updateTasks: async () => {
                const tasks = await Task.readAll()
                setTasks(tasks)
            }
        }
    }

    return <globalContext.Provider value={ props.state ?? globalState }>
        {props.children}
    </globalContext.Provider>
}

export {
    globalContext,
    GlobalContextHook,
}