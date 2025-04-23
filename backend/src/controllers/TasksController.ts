import { Task } from "modelos_de_proba"
import TasksStore from "../stores/TasksStore.js"

const taskStore = new TasksStore()

interface TasksControllerInterface {
    get( id?: string): Promise<string>
}

class TasksController implements TasksControllerInterface {
    async get (id?: string) {
        let response
        if (typeof id !== "string") response = JSON.stringify(await taskStore.readAll())
        else response = JSON.stringify(await taskStore.read(id))
        return response
    }
}

export default TasksController