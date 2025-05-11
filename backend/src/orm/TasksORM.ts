import { prisma as orm } from "../index.js"
import { taskCompatibleMap } from "modelos_de_proba"
import TasksORMInterface from "./TasksORMInterface.js"

class TasksORM implements TasksORMInterface {
    readAll() {
        const rowsPromise = orm.task.findMany()
        return rowsPromise
    }
    read(id: string) {
        const rowPromise = orm.task.findUnique({
            where: {
                id: id
            }
        })
        return rowPromise
    }
    async update(task: taskCompatibleMap) {
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