import { prisma as orm } from "../index.js"

import { taskCompatibleMap } from "modelos_de_proba"
import TasksRepoAbstract from "../models/TasksRepoAbstract.js"
import Task from "../models/Task.js"

export default class TasksRepo implements TasksRepoAbstract {

    static async readAll () {
        const rows = await orm.task.findMany()
        return TasksRepo.rowsToTasks(rows)
    }

    static async read (id: string) {
        const row = await orm.task.findUnique({
            where: {
                id: id
            }
        })
        const task = row === null ? null : TasksRepo.rowToTask(row)
        return task
    }

    static async update (task: Task) {
        const row = await orm.task.update({
            where: {
                id: task.id
            },
            data: {
                description: task.description,
                done: task.done
            }
        })
        if (row === null) throw new Error(`Can't find task id=${task.id} for update it`) //TODO: exceptionService
        return TasksRepo.rowToTask(row)
    }
    
    static async delete (task: Task) {
        try {
            orm.task.delete({
                where: {
                    id: task.id
                }
            })
            return true
        }
        catch (exception) {
            throw exception //TODO: xception handler
        }
    }

    static rowToTask ( row: taskCompatibleMap ): Task {
        return new Task(row.description, row.done, row.id)
    }

    static rowsToTasks( rows: taskCompatibleMap[] ): Task[] {
        return rows.map( row => TasksRepo.rowToTask(row) )
    }
    
}
