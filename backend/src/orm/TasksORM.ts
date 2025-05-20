import { prisma as orm } from "../index.js"
import { taskCompatibleMap } from "modelos_de_proba"
import TasksORMAbstract from "./TasksORMInterface.js"

class TasksORM extends TasksORMAbstract {
    static async readAll() {
        const rowsPromise = orm.task.findMany()
        return rowsPromise
    }
    static async read(id: string) {
        const rowPromise = orm.task.findUnique({
            where: {
                id: id
            }
        })
        return rowPromise
    }
    static async update(task: taskCompatibleMap) {
        try {
            const rowPromise = await orm.task.update({
                where: {
                    id: task.id
                },
                data: {
                    description: task.description,
                    done: task.done
                }
            })
            return rowPromise
        } catch (exception) {
            console.error(exception) //TODO: exception service
            return null
        }
    }
}

export {
    TasksORM
}