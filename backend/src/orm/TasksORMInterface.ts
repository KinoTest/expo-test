import { taskCompatibleMap } from "modelos_de_proba"

export default interface TasksORMInterface {
    readAll(): Promise<taskCompatibleMap[]>
    read(id: string): Promise<taskCompatibleMap|null>
    update(task: taskCompatibleMap): Promise<taskCompatibleMap|null>
}