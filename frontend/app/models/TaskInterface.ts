import { AnemicTask } from "modelos_de_proba";
import { Task } from "./Task";
import { ReactElement } from "react";

// TODO: Can we use circular reference for typing?
/*
interface TaskInterface extends AnemicTask {
    update: ()=>Promise<Task>
    delete: ()=>Promise<boolean>
}
*/

abstract class TaskAbstract extends AnemicTask {
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
        update(): Promise<Task>
        delete(): Promise<boolean>
    }
}

export {
    TaskAbstract,
    //TaskInterface,
    TaskMethodsObjectInterface,
}