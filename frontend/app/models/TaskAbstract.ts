import { AnemicTask } from "modelos_de_proba";
import Task from "./Task";

// TODO: Can we use circular reference for typing?
/*
interface TaskInterface extends AnemicTask {
    update: ()=>Promise<Task>
    delete: ()=>Promise<boolean>
}
*/

export default abstract class TaskAbstract extends AnemicTask {
    constructor (description: string, done: boolean, id?: string) {
        super(description, done, id)
    }
    update!: ()=>Promise<Task>
    delete!: ()=>Promise<boolean>
    static read: (id: string) => Promise<Task | undefined>
    static readAll: () => Promise<Task[]>
    static count: () => Promise<number>
}

type TaskMethodsObjectInterface = {
    static: {
        read(id: string): Promise<Task | undefined>
        readAll(): Promise<Task[]>
        count(): Promise<number>
    },
    dynamic: {
        update( task: Task): Promise<Task>
        delete(): Promise<boolean>
    }
}

export {
    TaskMethodsObjectInterface,
}