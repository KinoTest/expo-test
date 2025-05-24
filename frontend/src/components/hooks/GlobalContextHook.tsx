import Task from "@/src/models/Task";
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
            updateTaskInGlobalState: ( updatedTask ) => {
                const oldTaskIndex = tasks.findIndex( task => task.id === updatedTask.id)
                setTasks([
                    ...tasks.slice(0, oldTaskIndex),
                    updatedTask,
                    ...tasks.slice(oldTaskIndex+1)
                ])
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