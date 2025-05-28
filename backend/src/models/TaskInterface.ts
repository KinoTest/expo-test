import { AnemicTask, taskCompatibleMap } from "modelos_de_proba";
import Task from "./Task.js";

abstract class TaskAbstract extends AnemicTask {
    update!: ()=>Promise<Task>
    delete!: ()=>Promise<boolean>
    toObject!: ()=>taskCompatibleMap
}

export {
    TaskAbstract,
}