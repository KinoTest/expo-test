import { Task } from "modelos_de_proba"
import { backendHostURL } from "../config"

interface TasksORMInterface {
    getAllTasks(): Promise<Task[]>
}

class TasksORM implements TasksORMInterface {
    async getAllTasks () {
        const response = await fetch(`${backendHostURL}/task/`)
        const data = await response.json()
        return data.map( (item: { description: string; done: boolean; id: string | undefined }) => new Task(item.description, item.done, item.id))
    }
}

export default TasksORM