import { Task } from "modelos_de_proba"

const _tasksData = [
    {
        id: '0',
        description: 'Un',
        done: false
    },
    {
        id: '1',
        description: 'Outro',
        done: true
    },
    {
        id: '2',
        description: 'Fin',
        done: false
    },
]

/** TODO: Create Interface and ORM  */

const _tasksObjects = _tasksData.map( taskData => new Task(taskData.description, taskData.done, taskData.id))

interface TasksControllerInterface {
    get( id?: string): string
}

class TasksController implements TasksControllerInterface {
    get (id?: string) {
        let response
        if (typeof id !== "string") response = JSON.stringify(_tasksObjects)
        else response = JSON.stringify(_tasksObjects.filter( item => item.id === id ))
        return response
    }
}

export default TasksController