import { Task, taskCompatibleMap } from "modelos_de_proba"
import { TasksStore } from "../stores/TasksStore.js"
import { response } from "express"

const tasksStore = new TasksStore()

interface TasksControllerInterface {
    get( id?: string): Promise<string>
    put( task: taskCompatibleMap ): Promise<Task|null>
}

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