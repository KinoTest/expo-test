import { Task } from "../models/Task.js"
import { TasksORM } from "../orm/TasksORM.js"
import TasksRepoAbstract from "./TasksRepoInterface.js"

class TasksRepo extends TasksRepoAbstract {
    static async readAll () {
        const rows = await TasksORM.readAll()
        return Task.fromManyObjects(rows)
    }
    static async read (id: string) {
        const row = await TasksORM.read(id)
        const task = row === null ? null : Task.fromObject(row)
        return task
    }
    static async update (task: Task) {
        const row = await TasksORM.update(task.toObject())
        //TODO: exceptionService
        if (row === null) throw new Error(`Can't find task id=${task.id} for update it`)
        return Task.fromObject(row)
    }
}

export {
    TasksRepo
}