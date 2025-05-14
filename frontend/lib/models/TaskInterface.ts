import { AnemicTask } from "modelos_de_proba";

interface TaskInterface extends AnemicTask {
    update: ()=>Promise<TaskInterface>
    delete: ()=>Promise<boolean>
}

abstract class TaskAbstract extends AnemicTask {
    update!: ()=>Promise<TaskInterface>
    delete!: ()=>Promise<boolean>
    static read: (id: string) => TaskInterface | null
    static readAll: () => [TaskInterface]
    static count: () => number
}

type TaskMethodsObjectInterface = {
    static: {
        read(id: string): TaskInterface | null
        readAll(): [TaskInterface]
        count(): number
    },
    dynamic: {
        update(): Promise<TaskInterface>
        delete(): Promise<boolean>
    }
}

export {
    TaskAbstract,
    TaskInterface,
    TaskMethodsObjectInterface,
}