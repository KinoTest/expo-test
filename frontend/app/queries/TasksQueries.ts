import { taskCompatibleMap } from "modelos_de_proba"
import { backendHostURL } from "../config"
import { Task } from "../models/Task"
import TasksQueriesInterface from "./TasksQueriesInterface"

class TasksQueries implements TasksQueriesInterface {
    async getAllTasks () {
        const response = await fetch(`${backendHostURL}/task/`)
        const data: taskCompatibleMap[] = await response.json()
        const output = data.map( (item) => new Task(item.description, item.done, item.id))
        return output
    }
    async getTask(id: string) {
        throw new Error('//TODO: Method not implemented!')
    }
    async postTask(task: Task) {
        throw new Error('//TODO: Method not implemented!')
    }
    async putTask(task: Task) {
        const response = await fetch(`${backendHostURL}/task/`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //TODO: exceptionService
        if (!response.ok) throw new Error(response.statusText);
        return response.json()
    }
}

export default TasksQueries