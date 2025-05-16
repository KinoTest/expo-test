import { TaskAbstract, TaskMethodsObjectInterface } from "./TaskInterface.js"
import { TasksRepo } from "../repos/TasksRepo.js"
import { taskCompatibleMap } from "modelos_de_proba"
import { rowToTask, taskToRow, rowsToTasks } from "../lib/conversion.js"

const taskRepo = new TasksRepo()

const methods: TaskMethodsObjectInterface = {
    static: {
        read: function (id: string) {
            const taskPromise = taskRepo.read(id)
            return taskPromise
        },
        readAll: function () {
            const tasksPromise = taskRepo.readAll()
            return tasksPromise
        },
        count: async function () {
            throw new Error("//TODO: Function not implemented.")
        },
        fromObject: rowToTask,
        fromManyObjects: rowsToTasks
    },
    dynamic: {
        update: function (task: Task): Promise<Task> {
            const taskPromise = taskRepo.update(task)
            return taskPromise
        },
        delete: function (): Promise<boolean> {
            throw new Error("//TODO: Function not implemented.")
        },
        toObject: taskToRow
    }
}

class Task extends TaskAbstract {
    constructor ( description: string, done: boolean, id?: string, methodsInjection?: TaskMethodsObjectInterface ) {
        super(description, done,  id)
        /** Using closures for injecting methods as dependencies */
        this.delete = () => {
            const method = (methodsInjection ? methodsInjection.dynamic.delete :  methods.dynamic.delete)
            return method(this)
        }
        this.update = () => {
            const method = (methodsInjection ? methodsInjection.dynamic.update : methods.dynamic.update)
            return method(this)
        }
        this.toObject = ()=>{
            const method = (methodsInjection ? methodsInjection.dynamic.toObject : methods.dynamic.toObject)
            return method(this)
        }
    }
    static read: (id: string) => Promise<Task | null>
    static readAll: () => Promise<Task[]>
    static count: () => Promise<number>
    static fromObject: (object: taskCompatibleMap) => Task
    static fromManyObjects: (objects: taskCompatibleMap[]) => Task[]
    delete: () => Promise<boolean>
    update: () => Promise<Task>
    toObject: () => taskCompatibleMap
}

function addTaskStaticMethods ( methodsInjection: TaskMethodsObjectInterface = methods) {
    Task.count = methodsInjection.static.count
    Task.read = methodsInjection.static.read
    Task.readAll = methodsInjection.static.readAll
    Task.fromObject = methodsInjection.static.fromObject
    Task.fromManyObjects = methodsInjection.static.fromManyObjects
}

addTaskStaticMethods()

export {
    Task
}