import { taskCompatibleMap } from "modelos_de_proba"
import { Task } from "../models/Task.js"
import { flushResult } from "../service/TasksServices.js"
import { Response } from "express"

export default interface TasksControllerInterface {
    get( id?: string): Promise<Task|Task[]|null>
    put( task: taskCompatibleMap ): Promise<Task|null>
    flush(): Promise<flushResult>
}