import Task from "@/app/models/Task"
import { Dispatch, SetStateAction } from "react"

type globalStateObject = {
        globalStates: {
            initialized: boolean
            tasks: Task[]
        },
        globalDispatchers: {
            setInitialized: Dispatch<SetStateAction<boolean>>
            setTasks: Dispatch<SetStateAction<Task[]>>
            updateTasks: ()=> Promise<undefined>
        }
    }

export default globalStateObject