import { Task } from "../models/Task.js"
import { TasksORM } from "../orm/TasksORM.js"
import TasksRepoInterface from "./TasksRepoInterface.js"

const tasksORM = new TasksORM()

class TasksRepo implements TasksRepoInterface {
    async readAll () {
        const rows = await tasksORM.readAll()
        return Task.fromManyObjects(rows)
    }
    async read (id: string) {
        const row = await tasksORM.read(id)
        const task = row === null ? null : Task.fromObject(row)
        return task
    }
    async update (task: Task) {
        const row = await tasksORM.update(task.toObject())
        //TODO: exceptionService
        if (row === null) throw new Error(`Can't find task id=${task.id} for update it`)
        return Task.fromObject(row)
    }
}

export {
    TasksRepo
}