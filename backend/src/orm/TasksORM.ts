import { prisma as orm } from "../index.js"
import { taskCompatibleMap } from "modelos_de_proba"

interface TasksORMInterface {
    readAll(): Promise<taskCompatibleMap[]>
    read(id: string): Promise<taskCompatibleMap|null>
}

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
}

export {
    TasksORM
}