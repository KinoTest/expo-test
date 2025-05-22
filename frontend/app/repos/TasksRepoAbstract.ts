import Task from "../models/Task"

export default abstract class TasksRepoAbstract {
    static getAllTasks: () => Promise<Task[]>
    static getTask: (id: string) => Promise<Task|undefined>
    static postTask: (task: Task) => Promise<Task>
    static putTask: (task: Task) => Promise<Task>
}