import { Task } from "modelos_de_proba"
import { tasksObjects } from "../orm/TasksORM.js"

interface TasksStoreInterface {
    readAll(): Promise<Task[]>
    read(id: string): Promise<Task|undefined>
}

class TasksStore implements TasksStoreInterface {
    async readAll () {
        return tasksObjects
    }
    async read(id: string) {
        return tasksObjects.find( item => item.id === id )
    }
}

export default TasksStore