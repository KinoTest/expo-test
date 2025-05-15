import { AnemicTask } from "modelos_de_proba";

interface TaskInterface extends AnemicTask {
    update: ()=>Promise<TaskInterface>
    delete: ()=>Promise<boolean>
}

abstract class TaskAbstract extends AnemicTask {
    update!: ()=>Promise<TaskInterface>
    delete!: ()=>Promise<boolean>
    static read: (id: string) => Promise<TaskInterface | undefined>
    static readAll: () => Promise<TaskInterface[]>
    static count: () => Promise<number>
}

type TaskMethodsObjectInterface = {
    static: {
        read(id: string): Promise<TaskInterface | undefined>
        readAll(): Promise<TaskInterface[]>
        count(): Promise<number>
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