import { taskCompatibleMap } from "modelos_de_proba"
import Task from "../models/Task.js"
import { flushResult } from "../service/TasksServices.js"

export default abstract class TasksControllerAbstract {
    static get: ( id?: string) => Promise<Task|Task[]|null>
    static put: ( task: taskCompatibleMap ) => Promise<Task|null>
    static flush: () => Promise<flushResult>
}