import TasksRepo from "../repos/TasksRepo.js";
import Task from "../models/Task.js";

type flushResult = { deleted: Task[], failed: Task []}

class TasksServices {

    /**
     * Removes all tasks
     */
    static async flush() {
        const results: flushResult = {
            deleted: [],
            failed: []
        }
        const tasks = await TasksRepo.readAll()
        tasks.forEach( async task => {
            const deleted = await task.delete()
            if (deleted) results.deleted.push(task)
            else results.failed.push(task)
        })
        return results
    }

}

export {
    flushResult,
    TasksServices
}