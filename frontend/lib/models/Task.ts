import { TaskAbstract, TaskInterface, TaskMethodsObjectInterface } from "./TaskInterface"

function TaskFactory (methods: TaskMethodsObjectInterface) {
    class Task implements TaskAbstract {
        constructor ( description: string, done: boolean, id?: string ) {
            this.description = description
            this.done = done
            this.id = id
            /** Using closures for injecting methods as dependencies */
            this.delete = methods.dynamic.delete
            this.update = methods.dynamic.update
        }
        description: string
        done: boolean
        id?: string
        delete: () => Promise<boolean>
        update: () => Promise<Task>
        /** Using closures for injecting methods as dependencies */
        static read = methods.static.read
        static readAll = methods.static.readAll
        static count = methods.static.count
    }
    return Task
}

const methods: TaskMethodsObjectInterface = {
    static: {
        read: function (id: string): TaskInterface | null {
            throw new Error("Function not implemented.")
        },
        readAll: function (): [TaskInterface] {
            throw new Error("Function not implemented.")
        },
        count: function (): number {
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

const Task = TaskFactory(methods)

export {
    Task
}