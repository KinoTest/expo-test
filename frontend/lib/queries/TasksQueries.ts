import { Task } from "modelos_de_proba"
import { backendHostURL } from "../config"

interface TasksQueriesInterface {
    getAllTasks(): Promise<Task[]>
    getTask(id: string): Promise<Task|undefined>
    postTask(task: Task): Promise<boolean>
}

class TasksQueries implements TasksQueriesInterface {
    async getAllTasks () {
        const response = await fetch(`${backendHostURL}/task/`)
        const data = await response.json()
        const output = data.map( (item: { description: string; done: boolean; id: string | undefined }) => new Task(item.description, item.done, item.id))
        return output
    }
    async getTask(id: string) {
        /**TODO */
        return undefined
    }
    async postTask(task: Task) {
        /**TODO */
        return false
    }
}

export default TasksQueries