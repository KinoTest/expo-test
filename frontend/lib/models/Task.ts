import { TaskAbstract, TaskInterface, TaskMethodsObjectInterface } from "./TaskInterface"

function TaskFactory (methods: TaskMethodsObjectInterface) {
    class Task implements TaskAbstract {
        constructor ( description: string, done: boolean, methods: TaskMethodsObjectInterface, id?: string ) {
            this.description = description
            this.done = done
            this.id = id
            this.delete = methods.dinamyc.delete
            this.update = methods.dinamyc.update
        }
        description: string
        done: boolean
        id?: string
        delete: () => Promise<boolean>
        update: () => Promise<Task>
        static read = methods.static.read
        static readAll = methods.static.readAll
        static count = methods.static.count
    }
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
    dinamyc: {
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