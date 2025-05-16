import { taskCompatibleMap } from "modelos_de_proba"
import { Task } from "../models/Task.js"

export default interface TasksRepoInterface {
    readAll(): Promise<Task[]>
    read(id: string): Promise<Task|null>
    update(task: Task): Promise<Task|null>
}