import { Task } from "../models/Task.js"
import { taskCompatibleMap } from "modelos_de_proba"
import { TasksRepo } from "../repos/TasksRepo.js"
import TasksControllerInterface from "./TasksControllerInterface.js"

const tasksStore = new TasksRepo()

class TasksController implements TasksControllerInterface {
    async get (id?: string) {
        const response = typeof id !== "string" ? Task.readAll() : Task.read(id)
        return response
    }
    async put (taskObject: taskCompatibleMap) {
        const task = Task.fromObject(taskObject)
        const updatedTaskPromise = task.update()
        return updatedTaskPromise
    }
}

export default TasksController