import { taskCompatibleMap } from "modelos_de_proba"
import Task from "./Task.js"

export default abstract class TasksRepoAbstract {
    static readAll: () => Promise<Task[]>
    static read: (id: string) => Promise<Task|null>
    static update: (task: Task) => Promise<Task>
    static delete: (task: Task) => Promise<boolean>
    static rowToTask: (row: taskCompatibleMap ) => Task
    static rowsToTasks: (rows: taskCompatibleMap[] ) => Task[]
}