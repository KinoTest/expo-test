import { Task } from "../models/Task.js"
import { taskCompatibleMap } from "modelos_de_proba"
import TasksControllerInterface from "./TasksControllerInterface.js"
import { flushResult, TasksServices } from "../service/TasksServices.js"

class TasksController implements TasksControllerInterface {
    async get (id?: string) {
        const result = id === undefined ? Task.readAll() : Task.read(id)
        return result
    }
    async put (taskObject: taskCompatibleMap) {
        const task = Task.fromObject(taskObject)
        const updatedTaskPromise = task.update()
        return updatedTaskPromise
    }
    async flush() {
        const result = await TasksServices.flush()
        result.failed.forEach( task => console.error(`Can't delete task id ${task.id}`) ) //TODO: Log service
        return result
    }
}

export default TasksController