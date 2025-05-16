import { taskCompatibleMap } from "modelos_de_proba"
import { Task } from "../models/Task.js"

function rowToTask ( row: taskCompatibleMap ): Task {
    return new Task(row.description, row.done, row.id)
}

function rowsToTasks( rows: taskCompatibleMap[] ): Task[] {
    return rows.map( row => rowToTask(row) )
}

function taskToRow( task: Task ) {
    if (task.id === null) 
        //TODO: exceptionService
        throw new Error('You must save a task before serialize it: this task has not id.')
    const taskObject: taskCompatibleMap = {
        id: task.id ? task.id : '',
        description: task.description,
        done: task.done
    }
    return taskObject
}

export {
    rowToTask,
    rowsToTasks,
    taskToRow
}