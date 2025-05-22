import Task from "../models/Task.js"
import { taskCompatibleMap } from "modelos_de_proba"
import TasksControllerAbstract from "./TasksControllerInterface.js"
import { TasksServices } from "../service/TasksServices.js"

class TasksController implements TasksControllerAbstract {
    static async get (id?: string) {
        const result = id === undefined ? Task.readAll() : Task.read(id)
        return result
    }
    static async put (taskObject: taskCompatibleMap) {
        const task = Task.fromObject(taskObject)
        const updatedTaskPromise = task.update()
        return updatedTaskPromise
    }
    static async flush() {
        const result = await TasksServices.flush()
        result.failed.forEach( task => console.error(`Can't delete task id ${task.id}`) ) //TODO: Log service
        return result
    }
}

export default TasksController