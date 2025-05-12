import { Task, taskCompatibleMap } from "modelos_de_proba"

export default interface TasksControllerInterface {
    get( id?: string): Promise<string>
    put( task: taskCompatibleMap ): Promise<Task|null>
}