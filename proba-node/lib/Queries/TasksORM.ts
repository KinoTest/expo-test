import Task from "../Models/Task"

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

interface TasksORMInterface {
    getAllTasks(): Promise<Task[]>
}

class TasksORM implements TasksORMInterface {
    async getAllTasks () {
        const response = _tasksData.map( item => new Task(item.description, item.done, item.id))
        return response
    }
}

export default TasksORM