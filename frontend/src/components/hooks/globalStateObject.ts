import Task from "@/src/models/Task"
import { Dispatch, SetStateAction } from "react"

type globalStateObject = {
        globalStates: {
            initialized: boolean
            tasks: Task[]
        },
        globalDispatchers: {
            setInitialized: Dispatch<SetStateAction<boolean>>
            setTasks: Dispatch<SetStateAction<Task[]>>
            updateTaskInGlobalState: ( task: Task ) => undefined
        }
    }

export default globalStateObject