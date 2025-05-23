import { PropsWithChildren, useContext } from "react"
import { globalContext } from "./GlobalContextHook"
import Task from "@/src/models/Task"

export default function InitializeContextHook( props: PropsWithChildren ) {
    
    const { globalStates, globalDispatchers } = useContext(globalContext)

    async function initializeTasks () {
        const tasks = await Task.readAll()
        globalDispatchers.setTasks(tasks)
        globalDispatchers.setInitialized(true)
    }

    if ( !globalStates.initialized ) initializeTasks()

    return globalStates.initialized ? props.children : <>Loading...</> //TODO: Loading... component

}