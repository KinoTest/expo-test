import { TaskAbstract, TaskInterface, TaskMethodsObjectInterface } from "./TaskInterface"
import TasksQueries from "../queries/TasksQueries"

const taskQueries = new TasksQueries()

const methods: TaskMethodsObjectInterface = {
    static: {
        read: function (id: string) {
            throw new Error("Function not implemented.")
        },
        readAll: function () {
            const tasksPromise = taskQueries.getAllTasks()
            return tasksPromise
        },
        count: async function () {
            throw new Error("Function not implemented.")
        }
    },
    dynamic: {
        update: function (): Promise<TaskInterface> {
            throw new Error("Function not implemented.")
        },
        delete: function (): Promise<boolean> {
            throw new Error("Function not implemented.")
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