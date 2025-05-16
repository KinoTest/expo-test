import { TaskAbstract, TaskInterface, TaskMethodsObjectInterface } from "./TaskInterface"
import TasksQueries from "../queries/TasksQueries"

const taskQueries = new TasksQueries()

const methods: TaskMethodsObjectInterface = {
    static: {
        read: function (id: string) {
            throw new Error("//TODO: Function not implemented.")
        },
        readAll: function () {
            const tasksPromise = taskQueries.getAllTasks()
            return tasksPromise
        },
        count: async function () {
            throw new Error("//TODO: Function not implemented.")
        }
    },
    dynamic: {
        update: function (): Promise<TaskInterface> {
            throw new Error("//TODO: Function not implemented.")
        },
        delete: function (): Promise<boolean> {
            throw new Error("//TODO: Function not implemented.")
        }
    }
}

class Task extends TaskAbstract {
    constructor ( description: string, done: boolean, id?: string, methodsInjection?: TaskMethodsObjectInterface ) {
        super(description, done,  id)
        /** Using closures for injecting methods as dependencies */
        this.delete = methodsInjection ? methodsInjection.dynamic.delete :  methods.dynamic.delete
        this.update = methodsInjection ? methodsInjection.dynamic.update : methods.dynamic.update
    }
    static read: (id: string) => Promise<TaskInterface | undefined>
    static readAll: () => Promise<TaskInterface[]>
    static count: () => Promise<number>
    delete: () => Promise<boolean>
    update: () => Promise<TaskInterface>
}

function addTaskStaticMethods ( methodsInjection: TaskMethodsObjectInterface = methods) {
    Task.count = methodsInjection.static.count
    Task.read = methodsInjection.static.read
    Task.readAll = methodsInjection.static.readAll
}

addTaskStaticMethods()

export {
    Task
}