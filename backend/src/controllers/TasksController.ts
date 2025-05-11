import { taskCompatibleMap } from "modelos_de_proba"
import { TasksRepo } from "../repos/TasksRepo.js"
import TasksControllerInterface from "./TasksControllerInterface.js"

const tasksStore = new TasksRepo()

class TasksController implements TasksControllerInterface {
    async get (id?: string) {
        let response
        if (typeof id !== "string") response = JSON.stringify(await tasksStore.readAll())
        else response = JSON.stringify(await tasksStore.read(id))
        return response
    }
    async put (task: taskCompatibleMap) {
        return tasksStore.update(task)
    }
}

export default TasksController