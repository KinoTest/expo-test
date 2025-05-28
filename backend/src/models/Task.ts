import TaskAbstract from "./TaskAbstract.js"
import TasksRepo from "../repos/TasksRepo.js"
import { taskCompatibleMap } from "modelos_de_proba"

export default class Task implements TaskAbstract {
    /** Methods depending on external code are injected as dependencies, so we can mock them for testing */
    constructor ( description: string, done: boolean, id?: string, taskRepo = TasksRepo ) {
        this.delete = () => {
            return taskRepo.delete(this)
        }
        this.update = () => {
            return taskRepo.update(this)
        }
        this.description = description
        this.done = done
        this.id = id
    }
    delete: () => Promise<boolean>
    update: () => Promise<Task>
    toObject (): taskCompatibleMap {
        if (this.id === null) 
            //TODO: exceptionService
            throw new Error('You must save a task before serializing it: this task has not id.')
        return  {
            id: this.id ? this.id : '',
            description: this.description,
            done: this.done
        }
    }
    description: string
    done: boolean
    id?: string | undefined
}
