import { Task, taskCompatibleMap } from "modelos_de_proba"
import { TasksORM } from "../orm/TasksORM.js"
import TasksRepoInterface from "./TasksRepoInterface.js"

const tasksORM = new TasksORM()

function rowToTask ( row: taskCompatibleMap ): Task {
    return new Task(row.description, row.done, row.id)
}

function rowsToTasks( rows: taskCompatibleMap[] ): Task[] {
    return rows.map( row => rowToTask(row) )
}

class TasksRepo implements TasksRepoInterface {
    async readAll () {
        const rows = await tasksORM.readAll()
        return rowsToTasks(rows)
    }
    async read (id: string) {
        const row = await tasksORM.read(id)
        return row === null ? null : rowToTask(row)
    }
    async update (task: taskCompatibleMap) {
        const row = await tasksORM.update(task)
        return row === null ? null : rowToTask(row)
    }
}

export {
    TasksRepo
}