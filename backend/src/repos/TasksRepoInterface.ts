import { Task } from "../models/Task.js"

export default abstract class TasksRepoAbstract {
    static readAll: () => Promise<Task[]>
    static read: (id: string) => Promise<Task|null>
    static update: (task: Task) => Promise<Task>
}