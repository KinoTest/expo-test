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

const tasksObjects = _tasksData.map( taskData => new Task(taskData.description, taskData.done, taskData.id))

export {
    tasksObjects
}