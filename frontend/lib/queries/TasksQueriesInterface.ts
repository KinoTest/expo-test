import { Task } from "../models/Task"

export default interface TasksQueriesInterface {
    getAllTasks(): Promise<Task[]>
    getTask(id: string): Promise<Task|undefined>
    postTask(task: Task): Promise<Task>
    putTask(task: Task): Promise<Task>
}