import { Task } from "@/app/models/Task";
import { createContext, PropsWithChildren, useState } from "react";

const [ initialized, setInitialized ] = useState(false)
const [ tasks, setTasks ] = useState([] as Task[])

const globalState = {
    globalStates: {
        initialized,
        tasks,
    },
    globalStatesSetters: {
        setInitialized,
        setTasks,
    }
}

const globalContext = createContext(globalState)

function GlobalStateHook ( props: PropsWithChildren ) {
    return <globalContext.Provider value={globalState}>
        {props.children}
    </globalContext.Provider>
}

export {
    globalContext,
    GlobalStateHook,
}