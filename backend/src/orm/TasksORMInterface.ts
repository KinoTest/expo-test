import { taskCompatibleMap } from "modelos_de_proba"

export default abstract class TasksORMAbstract {
    static readAll: () => Promise<taskCompatibleMap[]>
    static read: (id: string) => Promise<taskCompatibleMap|null>
    static update: (task: taskCompatibleMap) => Promise<taskCompatibleMap|null>
}