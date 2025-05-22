import { AnemicTask, taskCompatibleMap } from "modelos_de_proba";
import Task from "./Task.js";

//TODO: Can we use circular reference for typing?
/**
interface TaskInterface extends AnemicTask {
    update: ()=>Promise<Task>
    delete: ()=>Promise<boolean>
}
*/

abstract class TaskAbstract extends AnemicTask {
    update!: ()=>Promise<Task>
    delete!: ()=>Promise<boolean>
    toObject!: ()=>taskCompatibleMap
    static read: (id: string) => Promise<Task | null>
    static readAll: () => Promise<Task[]>
    static count: () => Promise<number>
    static fromObject: (object: taskCompatibleMap)=>Task
    static fromManyObjects: (objects: taskCompatibleMap[])=>Task[]
}

type TaskMethodsObjectInterface = {
    static: {
        read(id: string): Promise<Task | null>
        readAll(): Promise<Task[]>
        count(): Promise<number>
        fromObject(object: taskCompatibleMap): Task
        fromManyObjects(objects: taskCompatibleMap[]): Task[]
    },
    dynamic: {
        update(task: Task): Promise<Task>
        delete(task: Task): Promise<boolean>
        toObject(task: Task): taskCompatibleMap
    }
}

export {
    TaskAbstract,
    //TODO: TaskInterface,
    TaskMethodsObjectInterface,
}