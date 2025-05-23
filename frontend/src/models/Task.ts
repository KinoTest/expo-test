
import TaskAbstract, { TaskMethodsObjectInterface } from "./TaskAbstract"
import TasksRepo from "../repos/TasksRepo"

const methods: TaskMethodsObjectInterface = {
    static: {
        read: function (id: string) {
            const taskPromise = TasksRepo.getTask(id)
            return taskPromise
        },
        readAll: function () {
            const tasksPromise = TasksRepo.getAllTasks()
            return tasksPromise
        },
        count: async function () {
            throw new Error("//TODO: Function not implemented.")
        }
    },
    dynamic: {
        update: function ( task: Task ): Promise<Task> {
            const taskPromise = TasksRepo.putTask(task)
            return taskPromise
        },
        delete: function (): Promise<boolean> {
            throw new Error("//TODO: Function not implemented.")
        }
    }
}

export default class Task implements TaskAbstract {
    constructor ( description: string, done: boolean, id?: string, methodsInjection?: TaskMethodsObjectInterface ) {
        /** Using closures for injecting methods as dependencies */
        this.delete = methodsInjection ? methodsInjection.dynamic.delete :  methods.dynamic.delete
        this.update = ()=>{
            const method = methodsInjection ? methodsInjection.dynamic.update : methods.dynamic.update
            return method(this)
        }
        this.description =description
        this.done = done
        this.id = id
    }
    static read: (id: string) => Promise<Task | undefined>
    static readAll: () => Promise<Task[]>
    static count: () => Promise<number>
    delete: () => Promise<boolean>
    update: () => Promise<Task>
    description: string
    done: boolean
    id?: string | undefined
}

function addTaskStaticMethods ( methodsInjection: TaskMethodsObjectInterface = methods) {
    Task.count = methodsInjection.static.count
    Task.read = methodsInjection.static.read
    Task.readAll = methodsInjection.static.readAll
}

addTaskStaticMethods()