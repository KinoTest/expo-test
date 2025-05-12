import { Task, taskCompatibleMap } from "modelos_de_proba"

export default interface TasksRepoInterface {
    readAll(): Promise<Task[]>
    read(id: string): Promise<Task|null>
    update(task: taskCompatibleMap): Promise<Task|null>
}