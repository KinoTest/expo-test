import { taskCompatibleMap } from "modelos_de_proba"
import { backendHostURL } from "../config"
import { Task } from "../models/Task"
import TasksQueriesAbstract from "./TasksQueriesInterface"

export default class TasksQuesries implements TasksQueriesAbstract {
    static async getAllTasks() {
        const response = await fetch(`${backendHostURL}/task/`)
        const data: taskCompatibleMap[] = await response.json()
        const output = data.map( (item) => new Task(item.description, item.done, item.id))
        return output
    }
    static async getTask(id: string) {
        throw new Error('//TODO: Method not implemented!')
    }
    static async postTask(task: Task) {
        throw new Error('//TODO: Method not implemented!')
    }
    static async putTask(task: Task) {
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